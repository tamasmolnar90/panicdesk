import { Link } from "react-router";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Header from "../../components/Header/Header";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <Header />

      <div className={styles.welcomeCard}>
        <h1>Szia, Rendszergazda!</h1>

        <p>Kezeld a bejelentett hibákat és kövesd a megoldásukat egy helyen.</p>

        <span className={styles.roleBadge}>Adminisztrátor</span>

        <div className={styles.linksContainer}>
          <Link className={styles.ticketLink} to="/jegyek">
            <span>Jegyeim megnyitása</span>
            <IoIosArrowDroprightCircle className={styles.icon} />
          </Link>

          <Link className={styles.adminLink} to="/admin">
            <span>Admin dashboard</span>
            <IoIosArrowDroprightCircle className={styles.icon} />
          </Link>
        </div>
      </div>
    </>
  );
}
