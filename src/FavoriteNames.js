import React from "react";
import NameList from "./NameList";

const FavoriteNames = ({ sortedNames, favoriteNames, setFavoriteNames }) => {
  const favoriteNamesList = sortedNames.filter((nameObj) => {
    return favoriteNames.includes(nameObj.id);
  });

  const removeFromFavoriteNamesList = (id) => {
    setFavoriteNames(favoriteNames.filter((item) => item !== id));
  };

  return (
    <div className="favorite-names">
      <h2>Favorite names</h2>
      <NameList
        nameList={favoriteNamesList}
        itemClickHandler={removeFromFavoriteNamesList}
      />
    </div>
  );
};

export default FavoriteNames;
