import React from "react";
import "./NameItem.css";

const NameItem = ({ dataObj }) => {
  return (
    <>
      <li className={dataObj.sex === "f" ? "name name-girl" : "name name-boy"}>
        {dataObj.name}
      </li>
    </>
  );
};

export default NameItem;
