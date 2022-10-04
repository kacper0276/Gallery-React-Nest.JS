import styles from "./LoadingIcon.module.css";

export default function LoadingIcon() {
  return (
    <>
      <div
        className={`d-flex justify-content-center ${styles.loadingBackground}`}
      >
        <div className={`spinner-border m-5 text-primary`} role="status">
          <span className={`sr-only ${styles.loadingText}`}>Ładowanie...</span>
        </div>
      </div>
    </>
  );
}
