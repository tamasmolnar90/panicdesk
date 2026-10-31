import { IoArrowUndoOutline } from "react-icons/io5";
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import styles from "./TicketDetailPage.module.css";

export default function TicketDetailPage() {
  return (
    <>
      <Header />

      <PageHeader
        eyebrow="Hibajegy"
        title="Monitor cseréje"
        description="Kövesd a bejelentett problémát."
        linkText="Vissza a jegyekhez"
        linkTo="/jegyek"
        icon={IoArrowUndoOutline}
      />

      <div className={styles.statusBar}>
        <StatusBadge status="open" />

        <div className={styles.statusActions}>
          <form>
            <select name="" id="">
              <option value="">Nyitott</option>
              <option value="">Folyamatban</option>
              <option value="">Megoldva</option>
              <option value="">Lezárva</option>
            </select>
          </form>

          <button type="submit">Törlés</button>
        </div>
      </div>

      <div className={styles.descriptionBar}>
        <p>A második monitor képe időnként elsötétül.</p>
      </div>

      <div className={styles.detailInfo}>
        <div>
          <p>Kategória</p>
          <span>Hardver</span>
        </div>

        <div>
          <p>Prioritás</p>
          <span>Sürgős</span>
        </div>

        <div>
          <p>Létrehozta</p>
          <span>Molnár Tamás</span>
        </div>

        <div>
          <p>Létrehozva</p>
          <span>2026. 10. 19. 10:24</span>
        </div>
      </div>

      <div className={styles.messagesSection}>
        <h2>Üzenetek</h2>

        <div className={styles.closedTicketNotice}>
          <p>
            Ez a hibajegy le van zárva, ezért nem lehet új üzenetet küldeni.
          </p>
        </div>

        <div className={styles.messagesList}>
          <div className={styles.messageCard}>
            <div className={styles.messageHeader}>
              <p>Kovács Anna</p>
              <span>2026. 10. 19 21:34</span>
            </div>

            <p className={styles.message}>
              A hiba ma reggel jelentkezett először.
            </p>
          </div>

          <div className={styles.messageCard}>
            <div className={styles.messageHeader}>
              <p>Kovács Anna</p>
              <span>2026. 10. 19 21:34</span>
            </div>

            <p className={styles.message}>
              A hiba ma reggel jelentkezett először.
            </p>
          </div>

          <div className={styles.messageCard}>
            <div className={styles.messageHeader}>
              <p>Kovács Anna</p>
              <span>2026. 10. 19 21:34</span>
            </div>

            <p className={styles.message}>
              A hiba ma reggel jelentkezett először.
            </p>
          </div>
        </div>

        <form className={styles.messageForm}>
          <div>
            <label htmlFor="message">Új üzenet</label>
            <textarea
              id="message"
              rows={7}
              placeholder="Írd ide az üzeneted..."
            />
          </div>

          <button>Üzenet küldése</button>
        </form>
      </div>
    </>
  );
}
