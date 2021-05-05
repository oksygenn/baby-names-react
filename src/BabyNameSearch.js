import React, { useState } from "react";

const BabyNameSearch = () => {
  const [searchName, setSearchName] = useState("");

  const handleInputChange = (event) => {
    setSearchName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="search names"
      className="baby-name-search"
      value={searchName}
      onChange={handleInputChange}
    />
  );
};

export default BabyNameSearch;
