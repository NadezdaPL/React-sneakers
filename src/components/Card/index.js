import React from "react";
import styles from './Card.module.scss';

function Card({ image, title, price, onFavoriteClick, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onPlusClick = () => {
    onPlus({ image, title, price });
    setIsAdded(!isAdded);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavoriteClick}>
        <img src="images/heart-unliked.svg" alt="Unliked" />
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