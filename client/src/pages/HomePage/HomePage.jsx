import { Link } from "react-router";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useAuth } from "../../auth/useAuth";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div className={styles.welcomeCard}>
      <h1>Szia, {user?.name}</h1>

      <p>Kezeld a bejelentett hibákat és kövesd a megoldásukat egy helyen.</p>

      <span className={styles.roleBadge}>
        {user?.role === "ADMIN" ? "Adminisztrátor" : "Ügyfél"}
      </span>

      <div className={styles.linksContainer}>
        <Link className={styles.ticketLink} to="/jegyek">
          <span>Jegyeim megnyitása</span>
          <IoIosArrowDroprightCircle className={styles.icon} />
        </Link>

        {user?.role === "ADMIN" && (
          <Link className={styles.adminLink} to="/admin-dashboard">
            <span>Admin dashboard</span>
            <IoIosArrowDroprightCircle className={styles.icon} />
          </Link>
        )}
      </div>
    </div>
  );
}
