import React from "react";
import "./App.css";
import BabyNameList from "./BabyNameList";
import BabyNameSearch from "./BabyNameSearch";

import babyNamesArray from "./babyNamesData.json";

const babyNamesSorted = babyNamesArray.sort((a, b) =>
  a.name.localeCompare(b.name)
);

function App() {
  return (
    <div className="app">
      <BabyNameSearch babyNamesSorted={babyNamesSorted} />
      <BabyNameList babyNamesSorted={babyNamesSorted} />
    </div>
  );
}

export default App;
