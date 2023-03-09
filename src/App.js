import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);


  React.useEffect(() => {
    fetch('https://6408dcbf2f01352a8a9f916e.mockapi.io/items/')
      .then((res) => {
        return res.json()
      })
      .then(json => {
        setItems(json)
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])

  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h2>Sneakers</h2>
          <div className="search d-flex">
            <img src="images/search.svg" alt="Seach" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card 
            title={item.title} 
            price={item.price} 
            image={item.image}
            onFavorite={() => console.log('Favorite')}
            onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
