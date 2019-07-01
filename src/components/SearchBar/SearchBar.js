import React from "react";
import "./SearchBar.css";
import PropTypes from "prop-types";

const SearchBar = ({
  searchedChar,
  isAlive,
  updateSearchInput,
  toggleAliveChars,
  onSearchClick
}) => {
  return (
    <div className="SearchBar">
      <input
        className="Input"
        value={searchedChar}
        placeholder="Character name"
        onChange={e => updateSearchInput(e)}
      />
      <p>
        <input
          className="Checkbox"
          checked={isAlive}
          type="checkbox"
          onClick={() => toggleAliveChars()}
        />
        Is alive
      </p>
      <button className="Button" onClick={() => onSearchClick()}>
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  searchedChar: PropTypes.func,
  isAlive: PropTypes.bool,
  updateSearchInput: PropTypes.func,
  toggleAliveChars: PropTypes.func,
  onSearchClick: PropTypes.func
};

export default SearchBar;
