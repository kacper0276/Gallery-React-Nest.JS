import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import LoadingIcon from "../../Layout/partials/LoadingIcon/LoadingIcon";
import Slider from "../Slider/Slider";
import styles from "./ShowPhotosInAlbum.module.css";

export default function ShowPhotosInAlbum() {
  const location = useLocation();
  const { id } = useParams();
  useWebsiteTitle(`Zdjęcia albumu o id: ${id}`);
  const owner = window.localStorage.getItem("login-status");
  const [photos, setPhotos] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPhotos = async () => {
    await axios
      .get(`http://localhost:3002/photos/photosinalbum/${owner}/${id}`)
      .then((res) => {
        const photosFetch = res.data.photos;
        setPhotos(photosFetch);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPhotos();
  }, [location]);

  return (
    <div className={`${styles.mainStyle}`}>
      {loading ? (
        <LoadingIcon />
      ) : (
        <>
          {photos.length > 0 ? (
            <Slider slides={photos} />
          ) : (
            <b>Brak zdjęć w albumie :(</b>
          )}
        </>
      )}
    </div>
  );
}
