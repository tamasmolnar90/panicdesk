export const validateLogin = ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = "Client: Email mező kitöltése kötelező";
  }

  if (!password) {
    errors.password = "Client: Jelszó mező kitöltése kötelező";
  }

  return errors;
};
