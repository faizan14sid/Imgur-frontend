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
            <ul>
            <li><Link to="/"><Imgur/></Link></li>
            <li><Link to="/search"><Search/></Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/sign-up">Signup</Link></li>
          </ul>
          </div>
          <Switch>
        <Route exact path="/" component={Imgur}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        
      </Switch>
          </BrowserRouter>
           
          
         )
     }
};
export default Navbar;