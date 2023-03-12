import React from "react";
import Card from "../components/Card";

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
}) {   
  return (
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
            />
            }
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                {...item}
              />
          ))}
        </div>
    </div>
  )
}

export default Home;