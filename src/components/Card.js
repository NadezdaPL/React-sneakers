function Card(props) {
  return (
    <div className="card">
      <div className="card__favorite">
        <img src="/images/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.image} alt="" />
      <h3>{props.title}</h3>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span className="card__price">Price:</span>
          <b>{props.price} rub.</b>
        </div>
        <button className="card__button">
          <img height={11} width={11} src="images/card-plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;