import React,{useState} from 'react';
import './component.css';
import Sresult from './Sresult'

const Search = () => {
    const [img, setImg] = useState("");
    const InputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
        
    }
    
  return(
      <div>
  <form action="/search" method="get">
      <label htmlFor="header-search">
          <span className="visually-hidden"><h1>Search Images</h1></span>
      </label>
      <input
          type="text"
          id="header-search"
          placeholder="Search images here"
          value={img}
          onChange={InputEvent}
      />
      <button
       type="submit"
        className="btnSearch" 
         >Search</button>
      
  </form>
  <Sresult name={img}/>
  </div>
)};

export default Search;