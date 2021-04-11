import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';







ReactDOM.render(
    <React.Fragment> 
      <Router>
        <Navbar/>
      </Router>
      
       
     </React.Fragment>,
    
    document.getElementById('root')
);