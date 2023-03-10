import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);


  React.useEffect(() => {
    axios.get('https://6408dcbf2f01352a8a9f916e.mockapi.io/items/').then((res) => {
      setItems(res.data)
    })
    axios.get('https://6408dcbf2f01352a8a9f916e.mockapi.io/cart/').then((res) => {
      setCartItems(res.data)
    })
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://6408dcbf2f01352a8a9f916e.mockapi.io/cart/', obj);
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://6408dcbf2f01352a8a9f916e.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h2>{searchValue ? `Search by request: '${searchValue}'` : 'Sneakers'}</h2>
          <div className="search d-flex">
            <img src="images/search.svg" alt="Seach" />
            {searchValue && <img
            className="clear cu-p"
            src="images/button-remove.svg"
            alt="Clear"
            onClick={() => setSearchValue('')}
          />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
          .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
            key={index}
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
