import authService from "./auth.service.js";
import { validateRegistration, validateLogin } from "./auth.validation.js";
import {
  createToken,
  verifyToken,
  getExpiresAt,
  toAuthResponse,
} from "../../utils/jwt.js";
import { cookieOptions } from "../../config/cookieOptions.js";
import userService from "../users/user.service.js";

const register = async (req, res) => {
  const { name, email, password, passwordConfirm } = req.body;

  const errors = validateRegistration({
    name,
    email,
    password,
    passwordConfirm,
  });

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  const normalizedName = name.trim();
  const normalizedEmail = email.trim().toLowerCase();

  try {
    const user = await authService.register({
      name: normalizedName,
      email: normalizedEmail,
      password,
    });

    if (!user) {
      return res.status(404).json({
        message: "Server: Sikertelen regisztráció",
      });
    }

    res.status(200).json({
      message: "Server: Sikeres regisztráció",
      user: user,
    });
  } catch (error) {
    // terminálba írja
    console.error(
      "Server: Hiba történt a felhasználó regisztrációjánál",
      error,
    );

    // frontendre küldi
    res.status(error.statusCode || 500).json({
      message: error.statusCode
        ? error.message
        : "Server: Adatbázis-hiba történt",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const errors = validateLogin({
    email,
    password,
  });

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const user = await authService.login({ email, password });

    if (!user) {
      return res.status(401).json({
        message: "Server: Hibás email vagy jelszó",
      });
    }

    const userId = user.id;
    const token = createToken(userId, user.role);
    const payload = verifyToken(token);
    res.cookie("access_token", token, cookieOptions);

    res.status(200).json(toAuthResponse(user, payload));
  } catch (error) {
    console.error(
      "Server: Hiba történt a felhasználó bejelentkezésénél",
      error,
    );

    res.status(500).json({
      message: "Server: Adatbázis-hiba történt",
    });
  }
};

const logout = async (_req, res) => {
  res.clearCookie("access_token", cookieOptions);
  res.status(204).send();
};

const me = async (req, res) => {
  const userId = req.user.id;

  const user = await userService.findUserById(userId);

  if (!user) {
    return res
      .status(401)
      .json({ message: "Unauthorized", code: "UNAUTHORIZED" });
  }

  return res.json({
    user,
    expiresAt: getExpiresAt(req.authPayload),
  });
};

export default {
  register,
  login,
  logout,
  me,
};
