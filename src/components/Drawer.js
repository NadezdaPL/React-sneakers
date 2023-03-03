function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Shopping Bag{" "}
          <img
            className="button__remove cu-p"
            src="/images/button-remove.svg"
            alt="Remove"
          />
        </h2>
        <div className="items">
          <div className="cart__item d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/images/sneakers/1.jpg)" }}
              className="cart__image"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men's Sneakers Nike Blazer Mid Suede</p>
              <b>12 999 rub.</b>
            </div>
            <img
              className="button__remove"
              src="/images/button-remove.svg"
              alt="Remove"
            />
          </div>
          <div className="cart__item d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/images/sneakers/1.jpg)" }}
              className="cart__image"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men's Sneakers Nike Blazer Mid Suede</p>
              <b>12 999 rub.</b>
            </div>
            <img
              className="button__remove"
              src="/images/button-remove.svg"
              alt="Remove"
            />
          </div>
          <div className="cart__item d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/images/sneakers/1.jpg)" }}
              className="cart__image"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men's Sneakers Nike Blazer Mid Suede</p>
              <b>12 999 rub.</b>
            </div>
            <img
              className="button__remove"
              src="/images/button-remove.svg"
              alt="Remove"
            />
          </div>
        </div>
        <div className="cart__block">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>21 498 rub.</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>1074 rub.</b>
            </li>
          </ul>
          <button className="green__button">
            Checkout <img src="/images/cart-arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
