import React from 'react';
import './component.css';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter, Link,Route,Switch } from 'react-router-dom';
import Search from 'antd/lib/transfer/search';
import Uploads from './Uploads';
import Imgur from './Imgur';

 
class Navbar extends React.Component {
         render(){ 
        return(
   <BrowserRouter>
            
          <div>
         <ul>
         <li><Link to="/"><h1 style={{color:"white",position:"relative",left:"-200px"}}>IMGUR</h1></Link></li>
         <li><Link to="/upload">UPLOAD</Link></li>
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