import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../auth/useAuth.js";
import styles from "./SessionTimer.module.css";

export default function SessionTimer() {
  const { expiresAt, logout } = useAuth();
  const [remaining, setRemaining] = useState(0);
  const expirationHandled = useRef(false);

  useEffect(() => {
    expirationHandled.current = false;

    if (!expiresAt) {
      return;
    }

    const updateRemaining = () => {
      const nextRemaining = Math.max(
        0,
        new Date(expiresAt).getTime() - Date.now(),
      );

      setRemaining(nextRemaining);

      if (nextRemaining === 0 && !expirationHandled.current) {
        expirationHandled.current = true;
        logout("A munkamenet lejárt.");
      }
    };

    updateRemaining();

    const intervalId = setInterval(updateRemaining, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [expiresAt, logout]);

  const totalSeconds = Math.ceil(remaining / 1000);

  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");

  const seconds = (totalSeconds % 60).toString().padStart(2, "0");

  const isExpiring = totalSeconds <= 30;

  return (
    <span className={`${styles.timer} ${isExpiring ? styles.expiring : null}`}>
      {minutes}:{seconds}
    </span>
  );
}
