import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { validateLogin } from "./LoginPage.validation";
import { useAuth } from "../../auth/useAuth";
import logo from "../../assets/panic_desk_logo.png";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [clientErrors, setClientErrors] = useState({});
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionMessage] = useState(location.state?.message || "");

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    setError("");

    // objektum destrukturálás, validateRegisterben kibontja őket és egyből átadható: email, password ... akár csak azokat veszem ki belőle amik kellenek
    const newClientErrors = validateLogin(form);

    setClientErrors(newClientErrors);

    if (Object.keys(newClientErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      await login({ email: form.email, password: form.password });
      // navigate("/");
      const from = location.state?.from;
      navigate(from ? `${from.pathname}${from.search}${from.hash}` : "/", {
        replace: true,
      });
    } catch (error) {
      if (error.status === 400 && error.data?.errors) {
        setErrors(error.data.errors);
      } else {
        setError(error.message || "Client: Sikertelen bejelentkezés.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <img src={logo} alt="logo" />

          <h1>Üdv újra!</h1>

          <p>Jelentkezz be a hibajegyek kezeléséhez.</p>
        </div>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.emailField}>
            <label htmlFor="email">E-mail cím</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              // required
            />
            {clientErrors.email && (
              <p className={styles.fieldError}>{clientErrors.email}</p>
            )}

            {errors.email && (
              <p className={styles.fieldError}>{errors.email}</p>
            )}
          </div>

          <div className={styles.passwordField}>
            <label htmlFor="password">Jelszó</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              // required
            />
            {clientErrors.password && (
              <p className={styles.fieldError}>{clientErrors.password}</p>
            )}

            {errors.password && (
              <p className={styles.fieldError}>{errors.password}</p>
            )}
          </div>

          {/* <div className={styles.optionsRow}>
            <div>
              <input id="" name="" type="checkbox" value="" />
              <label htmlFor="vehicle1">Maradjak bejelentkezve</label>
            </div>

            <Link>Elfelejtett jelszó?</Link>
          </div> */}

          {error && (
            <p className={styles.formError} role="alert">
              {error}
            </p>
          )}

          {sessionMessage && (
            <p className={styles.formError}>{sessionMessage}</p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Folyamatban" : "Bejelentkezés"}
          </button>
        </form>

        <div className={styles.registerPrompt}>
          <span>Még nincs fiókod?</span>
          <Link to="/regisztracio">Regisztrálj</Link>
        </div>
      </div>
    </div>
  );
}
