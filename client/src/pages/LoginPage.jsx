import { Link } from "react-router";
import logo from "../assets/panic_desk_logo.png";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <img src={logo} alt="logo" />

          <h1>Üdv újra!</h1>

          <p>Jelentkezz be a hibajegyek kezeléséhez.</p>
        </div>

        <form className={styles.loginForm} action="">
          <div>
            <label htmlFor="">E-mail cím</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">Jelszó</label>
            <input type="text" />
          </div>

          <p className={styles.formError} role="alert">
            error üzenet
          </p>

          <button type="submit">Bejelentkezés</button>
        </form>

        <div className={styles.registerPrompt}>
          <span>Még nincs fiókod?</span>
          <Link to="/regisztracio">Regisztrálj</Link>
        </div>
      </div>
    </div>
  );
}
