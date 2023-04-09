import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites() {   
  const  { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h2>My bookmarks</h2>
      </div>
      <div className="d-flex flex-wrap">
          {favorites
            .map((item, index) => (
              <Card
                key={index}
                favorited={true}
                onFavorite={onAddToFavorite}
                {...item}
              />
          ))}
        </div>
    </div>
  )
}

export default Favorites;