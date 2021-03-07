import React from "react";
import './navbar.css';

const Search = () => {
  return (
    <div className="search">
    <form action="/" method="get">
    <label htmlFor="header-search">
        <span className="visually-hidden"></span>
    </label>
    <input
        type="text"
        id="header-search"
        placeholder="Search Images here"
        name="s" 
    />
    <button type="submit" className="btnSearch">Search</button>
</form>
</div>
  )};

export default Search;