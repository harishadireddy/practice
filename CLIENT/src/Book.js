import React from 'react'
import {Button} from '@material-ui/core';



//schema for each elements how it is going to look
const Book = (props)=>{
const {img,title,author}=props.things;

const clickHandler = () =>{
  return alert("HI");
}
return(
   
    
    <article>
     
        
        <img src={img} alt=""  />
        <h1 >{title}</h1>
        <h3>{author}</h3>
        < Button variant="outlined" color="primary" onClick={clickHandler}>click</Button>
       
    </article>
  
   
);

}

export default Book
