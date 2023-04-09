import React from "react";
import { Link } from "react-router-dom";
import headerLogo from '../../src/images/header-logo.png';
import headerCart from '../../src/images/header-cart.svg';
import heart from '../../src/images/heart.svg';
import headerUser from '../../src/images/header-user.svg';

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src={headerLogo} alt="Logo" />
          <div>
            <h2 className="text-uppercase">React Sneakers</h2>
            <p className="opacity-5">The best sneakers shop</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={18} height={18} src={headerCart} alt="Cart" />
          <span>1205 rub.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src={heart} alt="Heart" />
          </Link>
        </li>
        <li className="cu-p">
          <img width={18} height={18} src={headerUser} alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
