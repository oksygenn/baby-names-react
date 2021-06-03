import React from "react";
import "./NamePicker.css";
import NameList from "./NameList";

const NamePicker = ({
  sortedNames,
  searchValue,
  favoriteNames,
  setFavoriteNames,
}) => {
  const filteredNames = sortedNames
    .filter((nameObj) =>
      nameObj.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((nameObj) => !favoriteNames.includes(nameObj.id));

  const addToFavorite = (id) => {
    setFavoriteNames([...favoriteNames, id]);
  };

  return (
    <>
      <h2>All names</h2>
      <NameList nameList={filteredNames} itemClickHandler={addToFavorite} />
    </>
  );
};

export default NamePicker;
