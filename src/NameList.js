import React from "react";
import "./NameList.css";

const NameList = ({ nameList, itemClickHandler }) => {
  return (
    <ul className="name-list">
      {nameList.map((dataObj) => {
        return (
          <li
            onClick={() => itemClickHandler(dataObj.id)}
            className={dataObj.sex === "f" ? "name name-girl" : "name name-boy"}
          >
            {dataObj.name}
          </li>
        );
      })}
    </ul>
  );
};

export default NameList;
