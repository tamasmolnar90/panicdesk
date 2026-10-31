import authService from "./auth.service.js";
import { validateRegistration, validateLogin } from "./auth.validation.js";

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

  try {
    const register = await authService.register({
      name,
      email,
      password,
    });

    if (!register) {
      return res.status(404).json({
        message: "Server: Sikertelen regisztráció",
      });
    }

    res.status(200).json({
      message: "Server: Sikeres regisztráció",
      user: register,
    });
  } catch (error) {
    // terminálba írja
    console.error("Error creating user:", error);

    // frontendre küldi
    res.status(error.statusCode || 500).json({
      message: error.statusCode ? error.message : "Database error",
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
    const login = await authService.login({ email, password });

    if (!login) {
      return res.status(401).json({
        message: "Hibás email vagy jelszó",
      });
    }

    res.status(200).json({
      message: "A felhasználó sikeresen bejelentkezett",
      user: login,
    });
  } catch (error) {
    console.error("Error login user:", error);

    res.status(500).json({
      message: "Database error",
    });
  }
};

export default {
  register,
  login,
};
