import React from "react";
import Card from "../components/Card";
//import AppContext from "../context";
import search from "../../src/images/search.svg";
import removeButton from "../../src/images/button-remove.svg";

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading
}) {   

 

const renderItems = () => {
  const filtredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchValue.toLowerCase()));
  return (
    isLoading ? [...Array(10)] : (filtredItems)).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
  ))}

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h2>{searchValue ? `Search by request: '${searchValue}'` : 'Sneakers'}</h2>
        <div className="search d-flex">
          <img src={search} alt="Seach" />
            {searchValue && <img
              className="clear cu-p"
              src={removeButton}
              alt="Clear"
              onClick={() => setSearchValue('')}
            />
            }
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
         {renderItems()}
        </div>
    </div>
  )
}

export default Home;