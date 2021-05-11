import React, { useState } from "react";
import "./App.css";
import NameItem from "./NameItem";

const App = ({ nameData }) => {
  return (
    <div className="app">
      <ul>
        {nameData.map((data) => {
          return <NameItem data={data} />;
        })}
      </ul>
    </div>
  );
};

export default App;
