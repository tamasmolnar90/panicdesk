import { MdDashboardCustomize } from "react-icons/md";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./AdminUsersPage.module.css";

export default function AdminUsersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admin users"
        title="Felhasználók"
        description="Felhasználók kezelése."
        linkText="Admin dashboard"
        linkTo="/admin-dashboard"
        icon={MdDashboardCustomize}
      />

      <div className={styles.filterBar}>
        <div>
          <input
            name=""
            id=""
            aria-label="Név keresése"
            placeholder="Név keresése..."
          ></input>
        </div>

        <div>
          <select name="" id="" aria-label="Státusz">
            <option value="" selected>
              Minden role
            </option>
            <option value="">Admin</option>
            <option value="">Customer</option>
          </select>
        </div>
      </div>

      <ul className={styles.userList}>
        <li>
          <p>Teszt Elek</p>

          <form>
            <select name="" id="" aria-label="Role">
              <option value="">Admin</option>
              <option value="">Customer</option>
            </select>

            <button>Törlés</button>
          </form>
        </li>

        <li>
          <p>Teszt Elek</p>

          <form>
            <select name="" id="" aria-label="Role">
              <option value="">Admin</option>
              <option value="">Customer</option>
            </select>

            <button>Törlés</button>
          </form>
        </li>

        <li>
          <p>Teszt Elek</p>

          <form>
            <select name="" id="" aria-label="Role">
              <option value="">Admin</option>
              <option value="">Customer</option>
            </select>

            <button>Törlés</button>
          </form>
        </li>

        <li>
          <p>Teszt Elek</p>

          <form>
            <select name="" id="" aria-label="Role">
              <option value="">Admin</option>
              <option value="">Customer</option>
            </select>

            <button>Törlés</button>
          </form>
        </li>
      </ul>
    </>
  );
}
