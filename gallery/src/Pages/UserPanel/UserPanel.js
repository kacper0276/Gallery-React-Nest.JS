import { NavLink } from "react-router-dom";
import styles from "./UserPanel.module.css";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

export default function UserPanel() {
  useWebsiteTitle("Panel użytkownika");

  return (
    <div className={`${styles.mainStyle}`}>
      <div className={`${styles.cloud}`}>
        <NavLink
          to="/paneluzytkownika/dodajalbum"
          className={`${styles.links}`}
        >
          Dodaj album
        </NavLink>
      </div>
      <div className={`${styles.cloud}`}>
        <NavLink
          to="/paneluzytkownika/dodajzdjecia"
          className={`${styles.links}`}
        >
          Dodaj zdjęcia do albumu
        </NavLink>
      </div>
      <div className={`${styles.cloud}`}>
        <NavLink
          to="/paneluzytkownika/edytujalbumy"
          className={`${styles.links}`}
        >
          Edytuj albumy użytkownika
        </NavLink>
      </div>
    </div>
  );
}
