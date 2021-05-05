import React from "react";

const BabyNameItem = ({ babyInfo }) => {
  return (
    <>
      <li
        className={
          babyInfo.sex === "f" ? "baby-girl baby-name" : "baby-boy baby-name"
        }
      >
        {babyInfo.name}
      </li>
    </>
  );
};

export default BabyNameItem;
