import { IoTicketOutline } from "react-icons/io5";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./AdminDashboardPage.module.css";

export default function AdminDashboardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admin dashboard"
        title="Áttekintés"
        description="A PanicDesk aktuális állapota és törzsadatai."
        linkText="Jegyek megnyitása"
        linkTo="/jegyek"
        icon={IoTicketOutline}
      />

      <div className={styles.stats}>
        <div>
          <p>Nyitott jegyek</p>
          <span>10</span>
        </div>

        <div>
          <p>Átlagos életkor</p>
          <span>1 nap</span>
        </div>

        <div>
          <p>Összes státusz</p>
          <span>24</span>
        </div>
      </div>

      <div className={styles.dashboardColumns}>
        <div className={styles.adminPanel}>
          <h2>Jegyek státusz szerint</h2>

          <ul>
            <li className={styles.barRow}>
              <p>Nyitott</p>
              <span>8</span>
            </li>

            <li className={styles.barRow}>
              <p>Folyamatban</p>
              <span>1</span>
            </li>

            <li className={styles.barRow}>
              <p>Megoldva</p>
              <span>1</span>
            </li>

            <li className={styles.barRow}>
              <p>Lezárva</p>
              <span>1</span>
            </li>
          </ul>
        </div>

        <div className={styles.adminPanel}>
          <h2>Jegyek kategóriánként</h2>

          <ul>
            <li className={styles.barRow}>
              <p>Hardver</p>
              <span>6</span>
            </li>

            <li className={styles.barRow}>
              <p>Szoftver</p>
              <span>1</span>
            </li>

            <li className={styles.barRow}>
              <p>Hozzáférés</p>
              <span>1</span>
            </li>
          </ul>
        </div>

        <div className={styles.adminPanel}>
          <h2>Kategóriák kezelése</h2>

          <form action="">
            <div>
              <input type="text" placeholder="Új kategória" />
              <button type="submit">Hozzáadás</button>
            </div>
          </form>

          <ul>
            <li>
              <p>Hardver</p>
              <button>Törlés</button>
            </li>

            <li>
              <p>Hozzáférés</p>
              <button>Törlés</button>
            </li>

            <li>
              <p>Szoftver</p>
              <button>Törlés</button>
            </li>
          </ul>
        </div>

        <div className={styles.adminPanel}>
          <h2>Prioritások kezelése</h2>

          <form action="">
            <div>
              <input type="text" placeholder="Új prioritás" />
              <input type="text" placeholder="1-9" />
              <button type="submit">Hozzáadás</button>
            </div>
          </form>

          <ul>
            <li>
              <p>{`Alacsony (1)`}</p>
              <button>Törlés</button>
            </li>

            <li>
              <p>{`Normál (2)`}</p>
              <button>Törlés</button>
            </li>

            <li>
              <p>{`Magas (3)`}</p>
              <button>Törlés</button>
            </li>

            <li>
              <p>{`Sürgős (4)`}</p>
              <button>Törlés</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
