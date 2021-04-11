import React from 'react';
import {data} from './data';
import {Button,  Grid} from '@material-ui/core';



const List= ()=>{
    const [People, setPeople] = React.useState(data);
    const removeItem =(id)=>{
        const newPerson = People.filter((variable)=>variable.id!==id);
        setPeople(newPerson);
    }
    return(
        <><Grid  direction='row' spacing={12}>
           
        {
            People.map((variable)=>{
                const{id,name}=variable;
                return( 
                    
                    <div key ={id}>{name} 
                     <Button variant="outlined" color="primary" onClick={()=>removeItem(id)}>remove</Button>
                    </div>
                   
                   )
            })
        }
        
        <Button onClick={()=>setPeople([])}>press</Button>
         </Grid>
        </>
    );
    }
export default List 









