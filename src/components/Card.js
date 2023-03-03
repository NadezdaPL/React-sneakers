function Card() {
  return (
    <div className="card">
      <div className="card__favorite">
        <img src="/images/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src="/images/sneakers/1.jpg" alt="" />
      <h3 className="card__title">Men's Sneakers Nike Blazer Mid Suede</h3>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span className="card__price">Price:</span>
          <b className="card__number">12 999 rub.</b>
        </div>
        <button className="card__button">
          <img height={11} width={11} src="images/card-plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;