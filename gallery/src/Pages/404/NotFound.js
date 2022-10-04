import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import styles from "./NotFound.module.css";

export default function NotFound() {
  useWebsiteTitle("Nie znaleziono strony");

  return (
    <div className={`${styles.mainStyle}`}>
      <h1>Nie znaleziono strony</h1>
    </div>
  );
}
