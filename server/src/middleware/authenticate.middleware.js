import { verifyToken } from "../utils/jwt.js";

export const authenticate = (req, res, next) => {
  const token = req.cookies?.access_token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
      code: "UNAUTHORIZED",
    });
  }

  try {
    const payload = verifyToken(token);
    req.user = { id: payload.sub, role: payload.role };
    req.authPayload = payload;
    return next();
  } catch (error) {
    const code =
      error.name === "TokenExpiredError" ? "TOKEN_EXPIRED" : "UNAUTHORIZED";
    return res.status(401).json({ message: "Unauthorized", code });
  }
};
