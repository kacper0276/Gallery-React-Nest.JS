import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import LoadingIcon from "../../Layout/partials/LoadingIcon/LoadingIcon";
import styles from "./EditUserAlbums.module.css";

export default function EditUserAlbums(props) {
  useWebsiteTitle(
    `Edytuj swoje albumy: ${window.localStorage.getItem("login-status")}`
  );
  const location = useLocation();
  const navigation = useNavigate();
  const [albums, setAlbums] = useState();
  const [loading, setLoading] = useState(true);

  const fetchAllAlbums = async () => {
    axios
      .get(
        `http://localhost:3002/album/geteditalbums/${window.localStorage.getItem(
          "login-status"
        )}`
      )
      .then((res) => {
        const albumsFetch = res.data.albums;
        setAlbums(albumsFetch);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllAlbums();
  }, [location]);

  const deleteAlbum = async (id) => {
    await axios.get(`http://localhost:3002/album/deletealbum/${id}`);

    navigation("/paneluzytkownika");
  };

  return (
    <div className={`${styles.mainStyle}`}>
      {loading ? (
        <LoadingIcon />
      ) : albums.length > 0 ? (
        <table className={`table `}>
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nazwa</th>
              <th scope="col">Mini Img</th>
              <th scope="col">Usuń</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => {
              return (
                <tr key={album.id}>
                  <td>{album.id}</td>
                  <td>{album.nameAlbum}</td>
                  <td>{album.miniImg}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteAlbum(`${album.id}`)}
                    >
                      Usuń
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>Brak albumów</h1>
      )}
    </div>
  );
}
