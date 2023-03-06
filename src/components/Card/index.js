import React from "react";
import styles from './Card.module.scss';

function Card(props) {
  const onClickPus = () => {
    
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="images/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.image} alt="" />
      <h3>{props.title}</h3>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{props.price} rub.</b>
        </div>
        <button className="card__button" onClick={onClickPus}>
          <img height={11} width={11} src="images/card-plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;