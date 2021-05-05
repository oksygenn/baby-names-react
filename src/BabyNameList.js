import React from "react";
import BabyNameItem from "./BabyNameItem";

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
