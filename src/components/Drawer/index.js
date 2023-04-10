import React from "react";
import buttonRemove from "../../../src/images/button-remove.svg";
import cartArrow from "../../../src/images/cart-arrow.svg";
import emptyCart from "../../../src/images/empty-cart.jpg";
import order from "../../../src/images/order.svg";
import Info from "../Info";
import axios from "axios";
import { useCart } from "../../hooks/useCart";
import styles from "./Drawer.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://640afe6b81d8a32198d641d9.mockapi.io/orders/",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

     for (let i = 0; i < Array.length; i++) {
      const item = cartItems[i];
      await axios.delete("https://6408dcbf2f01352a8a9f916e.mockapi.io/cart/" + item.id);
      await delay(1000); 
     }
    } catch (error) {
      alert("Can't create an order :(");
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Shopping Bag{" "}
          <img
            className="button__remove cu-p"
            src={buttonRemove}
            alt="Remove"
            onClick={onClose}
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cart__item d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.image})` }}
                    className="cart__image"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} rub.</b>
                  </div>
                  <img
                    className="button__remove"
                    src={buttonRemove}
                    alt="Remove"
                    onClick={() => onRemove(obj.id)}
                  />
                </div>
              ))}
            </div>
            <div className="cart__block">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>{totalPrice} rub.</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100 ) * 5} rub.</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                Checkout <img src={cartArrow} alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={
              isOrderComplete ? "Your order has been confirmed!" : "Empty cart"
            }
            description={
              isOrderComplete
                ? `Your order #${orderId} will be delivered to courier soon`
                : "At least add one pair of sneakers to make an order."
            }
            image={isOrderComplete ? order : emptyCart}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
