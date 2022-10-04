import { Link } from "react-router-dom";
import styles from "./Album.module.css";

export default function Album(props) {
  return (
    <div className={`${styles.mainDiv}`}>
      <Link to={`/album/${props.id}`}>
        <div className={`${styles.imgTag}`}>
          <img
            src={`/uploads/${props.miniImg}`}
            alt="Mini img"
            style={{
              width: "150px",
              height: "150px",
            }}
          />
        </div>
        <div className={`${styles.nameAlbumTag}`}>
          <b>{props.nameAlbum}</b>
        </div>
      </Link>
    </div>
  );
}
