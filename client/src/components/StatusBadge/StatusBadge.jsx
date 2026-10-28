import styles from "./StatusBadge.module.css";

const statusConfig = {
  open: {
    label: "Nyitott",
    className: styles.statusOpen,
  },
  in_progress: {
    label: "Folyamatban",
    className: styles.statusInProgress,
  },
  resolved: {
    label: "Megoldva",
    className: styles.statusResolved,
  },
  closed: {
    label: "Lezárva",
    className: styles.statusClosed,
  },
};

export default function StatusBadge({ status }) {
  const config = statusConfig[status];

  return (
    <span className={`${styles.status} ${config.className}`}>
      {config.label}
    </span>
  );
}
