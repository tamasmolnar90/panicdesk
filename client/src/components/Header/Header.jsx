import { Link } from "react-router";
import { useAuth } from "../../auth/useAuth";
import { IoMdPower } from "react-icons/io";
import logo from "../../assets/panic_desk_logo.png";
import SessionTimer from "../SessionTimer/SessionTimer";
import styles from "./Header.module.css";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
      </div>

      <div className={styles.userActions}>
        <p>{user?.name}</p>
        <SessionTimer />

        <button type="button" onClick={() => logout()}>
          <span>Kijelentkezés</span>
          <IoMdPower className={styles.icon} />
        </button>
      </div>
    </header>
  );
}
