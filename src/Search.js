import React from "react";

const Search = ({ search }) => {
  // call function "search" with user input
  const handleInputChange = (event) => {
    search(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="search names"
      className="baby-name-search"
      onChange={handleInputChange}
    />
  );
};

export default Search;
