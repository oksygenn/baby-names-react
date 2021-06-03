const Search = ({ searchValue, setSearchValue }) => {

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <header>
      <input
        type="text"
        placeholder="Type a name..."
        value={searchValue}
        onChange={handleChange}
      />
    </header>
  );
};

export default Search;
