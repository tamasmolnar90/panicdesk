import { Link } from "react-router";
import { IoMdPower } from "react-icons/io";
import styles from "./Header.module.css";
import logo from "../../assets/panic_desk_logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
      </div>

      <div className={styles.userActions}>
        <p>Rendszergazda</p>

        <button type="button">
          <span>Kijelentkezés</span>
          <IoMdPower className={styles.icon} />
        </button>
      </div>
    </header>
  );
}
