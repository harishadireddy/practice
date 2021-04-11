import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './counter';
import Login from './Form';
import Header from './compnents/Header';
import Error from './Error'
import Glider from './slider'
import Practice from './practice';

const Reactrouters = ()=>{

return(
<Router>

<Switch>
<Route exact path="/">
    <App/>

</Route>
<Route path="/login">
    <Login/>

</Route>
<Route path="/header">
    <Header/>

</Route>
<Route path="/slider">
    <Glider/>

</Route>

<Route  path='/sample' render={() => {window.location.href="sample.html"}} >

</Route>

<Route  path='/practice' component={Practice} />



<Route path="*">
    <Error/>

</Route>



</Switch>

</Router>






);

};



export default Reactrouters;