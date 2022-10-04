import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import LoadingIcon from "../../Layout/partials/LoadingIcon/LoadingIcon";
import Album from "./Album/Album";
import styles from "./ShowAlbums.module.css";

export default function ShowAlbums() {
  useWebsiteTitle("Twoje albumy");
  const location = useLocation();
  const [albums, setAlbums] = useState();
  const [loading, setLoading] = useState(true);

  const fetchAlbums = async () => {
    await axios
      .get(
        `http://localhost:3002/album/showuseralbums/${window.localStorage.getItem(
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
    fetchAlbums();
  }, [location]);

  return (
    <div className={`${styles.mainStyle}`}>
      <h1>Twoje albumy: </h1>
      {loading ? (
        <LoadingIcon />
      ) : albums.length > 0 ? (
        albums.map((album) => {
          return <Album {...album} key={album.id} />;
        })
      ) : (
        <div>
          <b>Brak albumów :(</b>
        </div>
      )}
    </div>
  );
}
