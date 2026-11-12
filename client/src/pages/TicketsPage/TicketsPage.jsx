import { Link } from "react-router";
import { IoTicketOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import PageHeader from "../../components/PageHeader/PageHeader";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import styles from "./TicketsPage.module.css";

export default function TicketsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hibajegyek"
        title="Jegyeim"
        description="Keresd és kövesd a bejelentett problémákat."
        linkText="Új hibajegy"
        linkTo="/jegy-letrehozasa"
        icon={IoTicketOutline}
      />

      <div className={styles.filterBar}>
        <div>
          <input
            name=""
            id=""
            aria-label="Keresés címben"
            placeholder="Keresés címben..."
          ></input>
        </div>

        <div>
          <select name="" id="" aria-label="Státusz">
            <option value="" selected>
              Minden státusz
            </option>
            <option value="">Nyitott</option>
            <option value="">Folyamatban</option>
            <option value="">Megoldva</option>
            <option value="">Lezárva</option>
          </select>
        </div>

        <div>
          <select name="" id="" aria-label="Kategória">
            <option value="" selected>
              Minden kategória
            </option>
            <option value="">Hardver</option>
            <option value="">Szoftver</option>
            <option value="">Hozzáférés</option>
            <option value="">Egyéb</option>
          </select>
        </div>

        <div>
          <select name="" id="" aria-label="Prioritás">
            <option value="" selected>
              Minden prioritás
            </option>
            <option value="">Alacsony</option>
            <option value="">Normál</option>
            <option value="">Magas</option>
            <option value="">Sürgős</option>
          </select>
        </div>
      </div>

      <div className={styles.emptyState}>
        <h2>Nincs találat</h2>
        <p>Módosítsd a szűrőket, vagy hozz létre egy új hibajegyet.</p>
      </div>

      <div className={styles.ticketGrid}>
        <Link className={styles.ticketCard} to="/ticket/1">
          <div className={styles.ticketCardTop}>
            <StatusBadge status="open" />
            <span className={styles.ticketDate}>2026.10.22.</span>
          </div>

          <h2>Monitor cseréje</h2>

          <p>A második monitor képe időnként elsötétül.</p>

          <div className={styles.ticketMeta}>
            <span>Hardver</span>
            <span>Prioritás: Sürgős</span>
          </div>
        </Link>

        <Link className={styles.ticketCard} to="/ticket/2">
          <div className={styles.ticketCardTop}>
            <StatusBadge status="in_progress" />
            <span className={styles.ticketDate}>2026.10.22.</span>
          </div>

          <h2>Monitor cseréje</h2>

          <p>A második monitor képe időnként elsötétül.</p>

          <div className={styles.ticketMeta}>
            <span>Hardver</span>
            <span>Prioritás: Sürgős</span>
          </div>
        </Link>

        <Link className={styles.ticketCard} to="/ticket/3">
          <div className={styles.ticketCardTop}>
            <StatusBadge status="resolved" />
            <span className={styles.ticketDate}>2026.10.22.</span>
          </div>

          <h2>Monitor cseréje</h2>

          <p>A második monitor képe időnként elsötétül.</p>

          <div className={styles.ticketMeta}>
            <span>Hardver</span>
            <span>Prioritás: Sürgős</span>
          </div>
        </Link>

        <Link className={styles.ticketCard} to="/ticket/4">
          <div className={styles.ticketCardTop}>
            <StatusBadge status="closed" />
            <span className={styles.ticketDate}>2026.10.22.</span>
          </div>

          <h2>Monitor cseréje</h2>

          <p>A második monitor képe időnként elsötétül.</p>

          <div className={styles.ticketMeta}>
            <span>Hardver</span>
            <span>Prioritás: Sürgős</span>
          </div>
        </Link>
      </div>

      <nav className={styles.pagination}>
        <button type="button" disabled>
          <IoIosArrowBack className={styles.icon} />
          <span>Előző</span>
        </button>

        <span>1 / 6</span>

        <button type="button">
          <span>Következő</span>
          <IoIosArrowForward className={styles.icon} />
        </button>
      </nav>
    </>
  );
}
