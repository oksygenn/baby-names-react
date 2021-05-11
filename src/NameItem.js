import React from "react";
import "./NameItem.css";

const nameItem = ({ data }) => {
  return (
    <>
      <li className={data.sex === "f" ? "name name-girl" : "name name-boy"}>
        {data.name}
      </li>
    </>
  );
};

export default nameItem;
