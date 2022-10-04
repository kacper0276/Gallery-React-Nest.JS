import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import LoadingIcon from "../../Layout/partials/LoadingIcon/LoadingIcon";
import styles from "./AddPhotoToAlbum.module.css";

export default function AddPhotoToAlbum() {
  useWebsiteTitle("Dodaj zdjęcie do albumu");
  const cloudRef = useRef();
  const location = useLocation();
  const [userAlbums, setUserAlbums] = useState();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [photoData, setPhotoData] = useState({
    img: null,
    album: "",
    optionalDescription: "",
    owner: window.localStorage.getItem("login-status"),
  });

  const fetchAlbums = async () => {
    await axios
      .get(
        `http://localhost:3002/album/alluseralbums/${window.localStorage.getItem(
          "login-status"
        )}`
      )
      .then((res) => {
        const albums = res.data.albums;

        setUserAlbums(albums);
        setLoading(false);
      });
  };

  const addPhotoToAlbum = async (e) => {
    e.preventDefault();

    cloudRef.current.classList.toggle(`${styles.active}`);

    const formData = new FormData();
    formData.append("img", photoData.img);
    formData.append("album", photoData.album);
    formData.append("optionalDescription", photoData.optionalDescription);
    formData.append("owner", photoData.owner);

    setTimeout(() => {
      if (photoData.album !== "") {
        axios
          .post("http://localhost:3002/photos/addphoto", formData)
          .then((res) => {
            setMessage(res.data.message);
            cloudRef.current.classList.toggle(`${styles.active}`);
          });
      } else {
        setMessage("Nie wybrano albumu!");
        cloudRef.current.classList.toggle(`${styles.active}`);
      }
    }, 5000);
  };

  useEffect(() => {
    fetchAlbums();
  }, [location]);

  return (
    <div className={`${styles.mainStyle}`}>
      {loading ? (
        <LoadingIcon />
      ) : (
        <div className={`${styles.cloud}`} ref={cloudRef}>
          <form method="POST" encType="multipart/form-data">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Opcjonalny opis"
              onChange={(e) =>
                setPhotoData({
                  ...photoData,
                  optionalDescription: e.target.value,
                })
              }
            />
            <select
              className="form-select mb-2"
              onChange={(e) =>
                setPhotoData({ ...photoData, album: e.target.value })
              }
              defaultValue=""
            >
              <option value="">Wybierz album</option>;
              {userAlbums.map((album) => {
                return (
                  <option value={`${album.nameAlbum}`} key={album.id}>
                    {album.nameAlbum}
                  </option>
                );
              })}
            </select>
            <input
              type="file"
              name="img"
              className="form-control"
              onChange={(e) =>
                setPhotoData({ ...photoData, img: e.target.files[0] })
              }
            />
            <button onClick={addPhotoToAlbum} className="btn btn-primary mt-2">
              Dodaj zdjęcie!
            </button>
            {message ?? message}
          </form>
        </div>
      )}
    </div>
  );
}
