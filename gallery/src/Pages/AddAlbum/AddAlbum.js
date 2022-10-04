import { useRef, useState } from "react";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import styles from "./AddAlbum.module.css";
import axios from "axios";

export default function AddAlbum() {
  useWebsiteTitle("Dodaj album");
  const cloudRef = useRef();
  const [dataAlbum, setDataAlbum] = useState({
    name: "",
    img: null,
    owner: window.localStorage.getItem("login-status"),
  });
  const [message, setMessage] = useState("");

  const addAlbum = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", dataAlbum.name);
    formData.append("img", dataAlbum.img);
    formData.append("owner", dataAlbum.owner);
    cloudRef.current.classList.toggle(`${styles.active}`);

    axios.post("http://localhost:3002/album/add", formData).then((res) => {
      console.log(res);
      setTimeout(() => {
        setMessage(res.data.message);
        cloudRef.current.classList.toggle(`${styles.active}`);
      }, 4000);
    });
  };

  return (
    <div className={`${styles.mainStyle}`}>
      <div className={`${styles.cloud}`} ref={cloudRef}>
        <form method="POST" encType="multipart/form-data">
          <input
            type="text"
            name="nameAlbum"
            placeholder="Nazwa albumu"
            className="form-control mb-2"
            onChange={(e) =>
              setDataAlbum({ ...dataAlbum, name: e.target.value })
            }
          />
          <input
            type="file"
            name="MiniImg"
            className="form-control"
            onChange={(e) =>
              setDataAlbum({ ...dataAlbum, img: e.target.files[0] })
            }
          />
          <button className="btn btn-info mt-2" onClick={addAlbum}>
            Dodaj album
          </button>
          {message ?? <p>{message}</p>}
        </form>
      </div>
    </div>
  );
}
