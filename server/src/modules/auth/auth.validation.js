const validateRegistration = ({ name, email, password, passwordConfirm }) => {
  const errors = {};

  const normalizedName = typeof name === "string" ? name.trim() : "";
  const normalizedEmail = typeof email === "string" ? email.trim() : "";

  if (!normalizedName) {
    errors.name = "Server: A név megadása kötelező";
  }

  if (!normalizedEmail) {
    errors.email = "Server: Az email cím megadása kötelező";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    errors.email = "Server: Érvénytelen e-mail cím";
  }

  if (typeof password !== "string" || !password) {
    errors.password = "Server: A jelszó megadása kötelező";
  } else if (password.length < 8 || password.length > 32) {
    errors.password = "A jelszó hossza 8-32 karakter lehet";
  }

  if (typeof passwordConfirm !== "string" || !passwordConfirm) {
    errors.passwordConfirm = "Server: A jelszó megerősítése kötelező";
  } else if (password !== passwordConfirm) {
    errors.passwordConfirm = "Server: A két jelszó nem egyezik";
  }

  return errors;
};

const validateLogin = ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = "Server: Email mező kitöltése kötelező";
  }

  if (!password) {
    errors.password = "Server: Password mező kitöltése kötelező";
  }

  return errors;
};

export { validateRegistration, validateLogin };
