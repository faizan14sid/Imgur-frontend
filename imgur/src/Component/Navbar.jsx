import React from 'react';
import './navbar.css';
import Imgur from './Imgur';
import Search from './Search';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter, Link,Route,Switch } from 'react-router-dom';

 
class Navbar extends React.Component{
     render(){
         return(
             <BrowserRouter>
             <div>
              <Link to="/">IMGUR</Link>
            <ul>
            <li><Link to="/search">SEARCH</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/sign-up">SIGNUP</Link></li>
          </ul>
          </div>
          <Switch>
        <Route path="/" exact component={Imgur}/>
        <Route path="/search" exact component={Search}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/sign-up" exact component={Signup}/>
        
      </Switch>
          </BrowserRouter>
           
          
         )
     }
};
export default Navbar;