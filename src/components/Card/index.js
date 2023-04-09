import React from "react";
import AppContext from "../../context";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import liked from "../../images/heart-liked.svg";
import unliked from "../../images/heart-unliked.svg";
import checked from "../../images/button-checked.svg";
import plus from "../../images/card-plus.svg";

function Card({
  id,
  image,
  title,
  onFavorite,
  price,
  onPlus,
  favorited = false,
  loading = false,
}) {

  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onPlusClick = () => {
    onPlus({ id, image, title, price });
  };

  const onFavoriteClick = () => {
    onFavorite({ id, image, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={165}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="155" />
          <rect x="0" y="169" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="191" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="225" rx="5" ry="5" width="80" height="25" />
          <rect x="115" y="220" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onFavoriteClick}>
            <img src={isFavorite ? liked : unliked} alt="Unliked" />
          </div>
          <img width="100%" height={135} src={image} alt="" />
          <h3>{title}</h3>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>{price} rub.</b>
            </div>
            <img
              className={styles.plus}
              src={isItemAdded(id) ? checked : plus}
              alt="plus"
              onClick={onPlusClick}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
