import { useNavigate } from "react-router";
import { IoArrowUndoOutline } from "react-icons/io5";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./NewTicketPage.module.css";

export default function NewTicketPage() {
  const navigate = useNavigate();

  // const handleSubmit = async (event) => {};

  return (
    <>
      <PageHeader
        eyebrow="Új hibajegy"
        title="Probléma bejelentése"
        description="Írd le részletesen, miben segíthetünk."
        linkText="Vissza a jegyekhez"
        linkTo="/jegyek"
        icon={IoArrowUndoOutline}
      />

      <form className={styles.ticketForm} /*onSubmit={handleSubmit}*/>
        <div className={styles.titleField}>
          <label htmlFor="title">Cím</label>
          <input id="title" type="text" placeholder="Rövid, leíró cím" />
        </div>

        <div className={styles.descriptionField}>
          <label htmlFor="description">Leírás</label>
          <textarea
            id="description"
            rows={7}
            placeholder="Mi történt? Mikor jelentkezett a hiba?"
          />
        </div>

        <div className={styles.categoryField}>
          <label htmlFor="category">Kategória</label>
          <select name="" id="">
            <option value="" selected disabled>
              Válassz kategóriát
            </option>
            <option value="">Hardver</option>
            <option value="">Szoftver</option>
            <option value="">Hozzáférés</option>
            <option value="">Egyéb</option>
          </select>
        </div>

        <div className={styles.priorityField}>
          <label htmlFor="priority">Prioritás</label>
          <select name="" id="">
            <option value="" selected disabled>
              Válassz prioritást
            </option>
            <option value="">Alacsony</option>
            <option value="">Normál</option>
            <option value="">Magas</option>
            <option value="">Sürgős</option>
          </select>
        </div>

        <button type="submit" onClick={() => navigate("/jegyek/:id")}>
          Hibajegy létrehozása
        </button>
      </form>
    </>
  );
}
