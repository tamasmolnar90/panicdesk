import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { validateRegister } from "./RegisterPage.validation";
import { apiFetch } from "../../services/api";
import logo from "../../assets/panic_desk_logo.png";
import styles from "./RegisterPage.module.css";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
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

    // objektum destrukturálás, validateRegisterben kibontja őket és egyből átadható: name, email ... akár csak azokat veszem ki belőle amik kellenek
    const newClientErrors = validateRegister(form);

    setClientErrors(newClientErrors);

    if (Object.keys(newClientErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const data = await apiFetch("/regisztracio", {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          passwordConfirm: form.passwordConfirm,
        }),
      });

      // navigate("/", { state: { message: data.message } });
      navigate("/bejelentkezes", { state: { message: data.message } });
    } catch (error) {
      console.error(error);

      if (error.status === 400 && error.data?.errors) {
        setErrors(error.data.errors);
      } else {
        setError(error.message || "Client: Nem sikerült elérni a szervert");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.registerContainer}>
        <div className={styles.registerHeader}>
          <img src={logo} alt="logo" />

          <h1>Fiók létrehozása</h1>

          <p>Hozd létre ügyfélfiókodat néhány lépésben.</p>
        </div>

        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Teljes név</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              // required
            />
            {clientErrors.name && (
              <p className={styles.fieldError}>{clientErrors.name}</p>
            )}

            {errors.name && <p className={styles.fieldError}>{errors.name}</p>}
          </div>

          <div>
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

          <div>
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

          <div>
            <label htmlFor="passwordConfirm">Jelszó megerősítése</label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              value={form.passwordConfirm}
              onChange={handleChange}
              // required
            />
            {clientErrors.passwordConfirm && (
              <p className={styles.fieldError}>
                {clientErrors.passwordConfirm}
              </p>
            )}

            {errors.passwordConfirm && (
              <p className={styles.fieldError}>{errors.passwordConfirm}</p>
            )}
          </div>

          {error && (
            <p className={styles.formError} role="alert">
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Folyamatban" : "Regisztráció"}
          </button>
        </form>

        <div className={styles.loginPrompt}>
          <span>Van már fiókod?</span>
          <Link to="/bejelentkezes">Jelentkezz be</Link>
        </div>
      </div>
    </div>
  );
}
