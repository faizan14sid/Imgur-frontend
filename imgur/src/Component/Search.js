import React from 'react';
import './component.css'

const Search = () => {
  return(
  <form action="/" method="get">
      <label htmlFor="header-search">
          <span className="visually-hidden"><h1>Search Images</h1></span>
      </label>
      <input
          type="text"
          id="header-search"
          placeholder="Search images here"
          name="s" 
      />
      <button type="submit" className="btnSearch">Search</button>
  </form>
)};

export default Search;