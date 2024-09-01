import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CatImage.module.css";

const CAT_URL = "https://api.thecatapi.com/v1/images/search";

function CatImage() {
  const [catPhoto, setCatPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getCat() {
    try {
      const response = await axios.get(CAT_URL);
      setCatPhoto(response.data[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCat();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  function handelClick() {
    getCat();
  }
  return (
    <div className={styles.container}>
      {catPhoto && (
        <div className={styles.containerPhoto}>
          <h2 className={styles.header}>Random cat image</h2>
          <img
            className={styles.imageCat}
            src={catPhoto.url}
            width="300px"
            alt={`cat ${setCatPhoto.id}`}
          />
          <button className={styles.newCatBtn} onClick={handelClick}>
            Load new image
          </button>
        </div>
      )}
    </div>
  );
}

export default CatImage;
