import { useState } from "react";
import "./App.css";
import data from "./data/babyNamesData.json";
import NameList from "./Components/NameList";
import Search from "./Components/Search";
import ChooseSexButton from "./Components/ChooseSexButton";

const sortedNamesWithFavProp = data
  .map((name) => ({ ...name, isFavourite: false }))
  .sort((nameOne, nameTwo) => nameOne.name.localeCompare(nameTwo.name));

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [names, setNames] = useState(sortedNamesWithFavProp);

  let filteredNames = names.filter((entry) => {
    return (
      entry.name.toLowerCase().includes(searchInput.toLowerCase()) &&
      entry.isFavourite === false
    );
  });
  const favouriteNames = names.filter((name) => name.isFavourite === true);

  const handleClick = (nameObj) => {
    const updatedNames = names.map((name) => {
      if (name.id === nameObj.id) {
        name.isFavourite = !name.isFavourite;
        return name;
      }
      return name;
    });
    setNames(updatedNames);
  };
  const handleButton = (sex) => {
    if (sex) {
      filteredNames = sortedNamesWithFavProp.filter((entry) => {
        return entry.sex === sex;
      });
    } else {
      filteredNames = sortedNamesWithFavProp;
    }
    setNames(filteredNames);
  };
  return (
    <div className="App">
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <br />
      <ChooseSexButton handleButton={handleButton} sex={"f"} />
      <ChooseSexButton handleButton={handleButton} sex={"m"} />
      <ChooseSexButton handleButton={handleButton} />
      {favouriteNames.length > 0 && (
        <>
          <h3>Your Favourites:</h3>
          <NameList handleClick={handleClick} names={favouriteNames} />
        </>
      )}
      <h3>All Names:</h3>
      <NameList handleClick={handleClick} names={filteredNames} />
    </div>
  );
};
export default App;
