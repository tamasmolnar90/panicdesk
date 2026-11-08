// Jogosultságok kezelése: "ADMIN", "CUSTOMER"
import AppError from "../utils/app.error.js";

export const authorize = (...allowedRoles) => {
  return (req, _res, next) => {
    if (!req.user?.role || !allowedRoles.includes(req.user.role)) {
      return next(
        new AppError(403, "FORBIDDEN", "Server: Nincs jogosultságod."),
      );
    }

    return next();
  };
};
