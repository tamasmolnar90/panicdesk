import { Link } from "react-router";
import styles from "./PageHeader.module.css";

export default function PageHeader({
  eyebrow,
  title,
  description,
  linkText,
  linkTo,
  icon: Icon,
}) {
  return (
    <div className={styles.pageHeader}>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>

      <Link className={styles.link} to={linkTo}>
        <Icon className={styles.icon} />
        <span>{linkText}</span>
      </Link>
    </div>
  );
}
