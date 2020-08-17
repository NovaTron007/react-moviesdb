import React, { useState, useRef } from "react";
import FontAwesome from "react-fontawesome";
import { StyledSearchBar, StyledSearchBarContent } from "../styles/StyledSearchBar";

function SearchBar({ callback }) {
  const [state, setState] = useState("");
  const timeOut = useRef(null);

  const doSearch = event => {
    // console.log(event.target.value);
    const { value } = event.target;

    clearTimeout(timeOut.current); // clear

    setState(value); // update input value

    timeOut.current = setTimeout(() => {
      callback(value); // invoke callback function in home.js
    }, 500); // wait for user to searchf
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
        <input type="text" placeholder="Search Movie" onChange={doSearch} value={state} />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
}

export default SearchBar;
