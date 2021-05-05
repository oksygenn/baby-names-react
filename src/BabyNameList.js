import React from "react";
import BabyNameItem from "./BabyNameItem";

const BabyNameList = ({ babyNamesSorted, clickHandler }) => {
  return (
    <ul className="baby-names-list">
      {babyNamesSorted.map((babyInfo, index) => {
        // console.log(`i am index ${index}`);
        return (
          <BabyNameItem
            babyInfo={babyInfo}
            key={index}
            clickHandler={() => clickHandler(index)}
          />
        );
      })}
    </ul>
  );
};

export default BabyNameList;
