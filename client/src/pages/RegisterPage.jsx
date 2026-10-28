import { Link } from "react-router";
import logo from "../assets/panic_desk_logo.png";
import styles from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.registerPage}>
      <div className={styles.registerContainer}>
        <div className={styles.registerHeader}>
          <img src={logo} alt="logo" />

          <h1>Fiók létrehozása</h1>

          <p>Hozd létre ügyfélfiókodat néhány lépésben.</p>
        </div>

        <form className={styles.registerForm} action="">
          <div>
            <label htmlFor="">Teljes név</label>
            <input type="text" />
          </div>

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

          <button type="submit">Regisztráció</button>
        </form>

        <div className={styles.loginPrompt}>
          <span>Van már fiókod?</span>
          <Link to="/bejelentkezes">Jelentkezz be</Link>
        </div>
      </div>
    </div>
  );
}
