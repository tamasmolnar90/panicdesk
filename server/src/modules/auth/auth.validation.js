const validateRegistration = ({ name, email, password, passwordConfirm }) => {
  const errors = {};

  if (!name.trim()) {
    errors.name = "Server: Név mező kitöltése kötelező";
  }

  if (!email) {
    errors.email = "Server: Email mező kitöltése kötelező";
  }

  if (!password) {
    errors.password = "Server: Jelszó mező kitöltése kötelező";
  }

  if (!passwordConfirm) {
    errors.passwordConfirm =
      "Server: Jelszó megerősítése mező kitöltése kötelező";
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
