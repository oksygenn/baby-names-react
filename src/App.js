import React, { useState } from "react";
import "./App.css";
import NamePicker from "./NamePicker";
import Search from "./Search";
import FavoriteNames from "./FavoriteNames";

const App = ({ sortedNames }) => {
  const [searchValue, setSearchValue] = useState("");
  const [favoriteNames, setFavoriteNames] = useState([]);

  return (
    <div className="app">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <FavoriteNames
        sortedNames={sortedNames}
        favoriteNames={favoriteNames}
        setFavoriteNames={setFavoriteNames}
      />
      <NamePicker
        sortedNames={sortedNames}
        searchValue={searchValue}
        favoriteNames={favoriteNames}
        setFavoriteNames={setFavoriteNames}
      />
    </div>
  );
};

export default App;