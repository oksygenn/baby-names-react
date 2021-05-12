import React, { useState } from "react";
import "./App.css";
import NameList from "./NameList";

const App = ({ namesData }) => {
  const sortedNameData = namesData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="app">
      <NameList sortedNameData={sortedNameData} />
    </div>
  );
};

export default App;

// import BabyNameList from "./BabyNameList";
// import Search from "./Search";
// import babyNamesData from "./babyNamesData.json";

// // sort names in alphabetical order
// const sortedBabyNames = babyNamesData.sort((a, b) =>
//   a.name.localeCompare(b.name)
// );

// function App() {
//   const [babyNames, setBabyNames] = useState(sortedBabyNames);
//   const [favoriteNames, setFavoriteNames] = useState([]);

//   const handleNameClick = (index) => {
//     const babyNamesCopy = babyNames;
//     const clickedName = babyNamesCopy.splice(index, 1);
//     setBabyNames(babyNamesCopy);
//     const favoriteName = favoriteNames.concat(clickedName);
//     setFavoriteNames(favoriteName);
//   };

//   const handleFavoriteNameClick = (index) => {
//     const favoriteNamesCopy = favoriteNames;
//     const favName = favoriteNamesCopy.splice(index, 1);
//     setFavoriteNames(favoriteNamesCopy);
//     const baby = favName.concat(babyNames);
//     setBabyNames(baby);
//   };

//   const search = (searchValue) => {
//     // if input field is empty - show all names
//     if (searchValue === "") {
//       setBabyNames(sortedBabyNames);
//     } else {
//       // get only names which include user input and show them on the page
//       const filteredBabyNames = sortedBabyNames.filter((babyName) => {
//         return babyName.name.toLowerCase().includes(searchValue.toLowerCase());
//       });
//       setBabyNames(filteredBabyNames);
//     }
//   };

//   return (
//     <div className="app">
//       <Search search={search} />
//       <h2>Favorite Names</h2>
//       <BabyNameList
//         babyNamesSorted={favoriteNames}
//         clickHandler={handleFavoriteNameClick}
//       />
//       <h2>All Names</h2>
//       <BabyNameList
//         babyNamesSorted={babyNames}
//         clickHandler={handleNameClick}
//       />
//     </div>
//   );
// }
