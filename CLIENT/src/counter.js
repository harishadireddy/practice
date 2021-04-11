import React from 'react';

import {useState,useEffect} from 'react';
import {Button,GridList,Grid} from '@material-ui/core';

//we are running a loop over the objects in the books array with map and assiging the props
// as things and returning Book component withthose props according to the schema   
function App(){
const [counter,setCounter]=useState(0);

    useEffect(()=>{
    console.log("render");
    if (counter > 1) {
        document.title="new message (" + counter +")";

    }else{
         document.title="DATA MINING"
    }

});
    



    return(<section>
    <h1 >{counter}</h1>
    <GridList cols={2}  spacing ={12}>
        <Grid ><Button variant="outlined" onClick={()=>{setCounter(counter+1)}} color="primary">Increment</Button></Grid>
        <Grid> <Button variant="outlined" onClick={()=>{setCounter(counter-1)}} color="secondary">Decrement</Button></Grid>
        <Grid> <Button variant="outlined" onClick={()=>{setCounter(0)}} color="primary">reset</Button></Grid>
    
   
  
   </GridList>
    </section>);
          



 
}

export default App;