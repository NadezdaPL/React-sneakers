function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="images/header-logo.png" alt="Logo" />
        <div>
          <h2 className="text-uppercase">React Sneakers</h2>
          <p className="opacity-5">The best sneakers shop</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={18} height={18} src="images/header-cart.svg" alt="Cart" />
          <span>1205 rub.</span>
        </li>
        <li className="mr-20 cu-p">
          {/* <link to=""> */}
          <img width={18} height={18} src="images/heart.svg" alt="Heart" />
          {/* </link> */}
        </li>
        <li className="cu-p">
          <img width={18} height={18} src="images/header-user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;