import React from 'react';
import {useState,useEffect} from 'react';
import {Button} from '@material-ui/core';



function Window() {
 const [size,setSize]=  useState(window.innerWidth);

 const checkSize= ()=>{
     setSize(window.innerWidth);
 }
 useEffect(() => {
    window.addEventListener("resize",checkSize);
     return () => {
       
     }
 },[])



    return (
        <div>
            <h1>WINDOW</h1>
            <Button color="secondary">{size} pixels</Button>
        </div>
    )
}

export default Window
