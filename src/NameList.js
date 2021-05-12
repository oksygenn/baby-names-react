import React from "react";
import NameItem from "./NameItem";
import "./NameList.css";

const NameList = ({ sortedNameData }) => {
  return (
    <ul className="name-list">
      {sortedNameData.map((dataObj) => {
        return <NameItem dataObj={dataObj} key={dataObj.id} />;
      })}
    </ul>
  );
};

export default NameList;
