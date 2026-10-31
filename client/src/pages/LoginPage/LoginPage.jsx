import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { validateLogin } from "./LoginPage.validation";
import logo from "../../assets/panic_desk_logo.png";
import styles from "./LoginPage.module.css";

const API_URL = "http://localhost:5000/bejelentkezes";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [clientErrors, setClientErrors] = useState({});
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setError(data.message || "Client: Sikertelen bejelentkezés");
        }
        return;
      }

      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Client: Nem sikerült elérni a szervert");
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

          <div className={styles.optionsRow}>
            <div>
              <input id="" name="" type="checkbox" value="" />
              <label htmlFor="vehicle1">Maradjak bejelentkezve</label>
            </div>

            <Link>Elfelejtett jelszó?</Link>
          </div>

          {error && (
            <p className={styles.formError} role="alert">
              {error}
            </p>
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
