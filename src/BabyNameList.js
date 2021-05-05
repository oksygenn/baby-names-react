import React from "react";
// import babyNamesArray from "./babyNamesData.json";
import BabyNameItem from "./BabyNameItem";

// const babyNamesSorted = babyNamesArray.sort((a, b) =>
//   a.name.localeCompare(b.name)
// );

const BabyNameList = ({ babyNamesSorted }) => {
  return (
    <ul className="baby-names-list">
      {babyNamesSorted.map((babyInfo, index) => {
        return <BabyNameItem babyInfo={babyInfo} key={index} />;
      })}
    </ul>
  );
};

export default BabyNameList;
