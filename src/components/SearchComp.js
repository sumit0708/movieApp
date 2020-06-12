import React, { useState } from "react";

const SearchComp = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input style={{width: "40%", padding:'16px', margin: '16px'}}
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input style={{width: "auto", padding:'16px', margin: '16px'}} 
        onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default SearchComp;
