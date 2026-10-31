export const validateRegister = ({
  name,
  email,
  password,
  passwordConfirm,
}) => {
  const errors = {};

  if (!name.trim()) {
    errors.name = "Client: Név mező kitöltése kötelező";
  }

  if (!email) {
    errors.email = "Client: Email mező kitöltése kötelező";
  }

  if (!password) {
    errors.password = "Client: Jelszó mező kitöltése kötelező";
  }

  if (!passwordConfirm) {
    errors.passwordConfirm =
      "Client: Jelszó megerősítése mező kitöltése kötelező";
  } else if (password !== passwordConfirm) {
    errors.passwordConfirm = "Client: A két jelszó nem egyezik";
  }

  return errors;
};
