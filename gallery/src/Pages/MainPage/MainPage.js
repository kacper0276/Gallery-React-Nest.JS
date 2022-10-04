import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import styles from "./MainPage.module.css";

export default function MainPage() {
  useWebsiteTitle("Strona główna");

  return (
    <div className={`${styles.mainStyle}`}>
      Witaj na stronie głównej podniebnego wirtualnego albumu
    </div>
  );
}
