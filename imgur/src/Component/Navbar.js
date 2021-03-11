import React from 'react';
import './component.css';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter, Link,Route,Switch } from 'react-router-dom';
import Search from './Search';
import Uploads from './Uploads';
import Imgur from './Imgur';

 
class Navbar extends React.Component {
         render(){ 
        return(
   <BrowserRouter>
            
          <div>
         <ul>
         <li> <Link className="imgurlogo" to="/">IMGUR</Link></li>
         <li><Link to="/upload"><button className="buttonUpload">Upload images</button></Link></li>
         <li><Link to="/search">SEARCH</Link></li>
         <li><Link to="/login">LOGIN</Link></li>
         <li><Link to="/sign-up">SIGNUP</Link></li>
       </ul>
    
       </div>

       <Switch>
     <Route path="/" exact component={Imgur}/>
     <Route path="/upload" exact component={Uploads}/>
     <Route path="/search" exact component={Search}/>
     <Route path="/login" exact component={Login}/>
     <Route path="/sign-up" exact component={Signup}/>
     
   </Switch>
       </BrowserRouter>
            
           
          
         )
 } };
export default Navbar;