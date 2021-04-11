import React from 'react';
import {  Route,Link} from 'react-router-dom';
import App from './counter';
import Login from './Form';
import Header from './compnents/Header';
import Glider from './slider'

import { Divider } from '@material-ui/core';
const Navbar = () =>{

    return(
        <>
       
             
       
    <nav>
      <Link to="/">counter</Link>
    </nav>
     <nav>
      <Link to="/Login">second</Link>
    </nav>
     <nav>
      <Link to="/Header">header</Link>
    </nav>
     <nav>
      <Link to="/slider">Glider</Link>
    </nav>
   
    <Divider/>
    <div>
       <Route exact path='/' component={App} /> 
      <Route path="/Login" component={Login} />
       
        <Route path="/Header" component={Header} />
          <Route path="/slider" component={Glider} />
    </div>

       
        
        </>
    );
};

export default Navbar;