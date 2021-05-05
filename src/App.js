import React, { useState } from "react";
import "./App.css";
import BabyNameList from "./BabyNameList";
import Search from "./Search";
import babyNamesData from "./babyNamesData.json";

// sort names in alphabetical order
const sortedBabyNames = babyNamesData.sort((a, b) =>
  a.name.localeCompare(b.name)
);

function App() {
  const [babyNames, setBabyNames] = useState(sortedBabyNames);

  const search = (searchValue) => {
    // if input field is empty - show all names
    if (searchValue === "") {
      setBabyNames(sortedBabyNames);
    } else {
      // get only names which include user input and show them on the page
      const filteredBabyNames = sortedBabyNames.filter((babyName) => {
        return babyName.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setBabyNames(filteredBabyNames);
    }
  };

  return (
    <div className="app">
      <Search search={search} />
      <BabyNameList babyNamesSorted={babyNames} />
    </div>
  );
}

export default App;
