import React from "react";
import styles from './Card.module.scss';

function Card({ id, image, title, onFavorite, price, onPlus, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onPlusClick = () => {
    onPlus({ image, title, price });
    setIsAdded(!isAdded);
  }

  const onFavoriteClick = () => {
    onFavorite({ id, image, title, price });
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavoriteClick}>
        <img 
        src={isFavorite ? "images/heart-liked.svg" : "images/heart-unliked.svg"}  
        alt="Unliked"
        />
      </div>
      <img width={133} height={112} src={image} alt="" />
      <h3>{title}</h3>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} rub.</b>
        </div>
          <img 
            className={styles.plus} 
            src={isAdded ? "images/button-checked.svg" : "images/card-plus.svg"} 
            alt="plus" 
            onClick={onPlusClick} 
          />
      </div>
    </div>
  );
}

export default Card;