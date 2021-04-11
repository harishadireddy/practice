import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";

import { Box, Button, Grid } from "@material-ui/core";

import {motion} from 'framer-motion';

const useStyles = makeStyles({
  transitionGroup: {
    width: "300px",
    height: "300px",
    background: "red",
    animation: "$slideDown 2.9s"
  },
  "@keyframes slideDown": {
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 }
  },
  
   box2: {
    width: "300px",
    height: "300px",
    backgroundColor: "red",
    marginBottom: "20px",
  animation:"$slideDown 3s"},
  
   box3: {
    width: "300px",
    height: "300px",
    backgroundColor: "red",
    marginBottom: "20px",
  animation:"$slideDown 3.1s"}
});

const Slider=()=> {

    const [state, setstate] = useState('0px')
  const props = { height: 50, width: 50 };
  const classes = useStyles(props);
  return (
    <div >
      <Grid container direction="row" spacing={8}>
       
        <Grid item>
          <div className={classes.transitionGroup}></div>
        </Grid>
        <Grid item>
          <div className={classes.box2}></div>
        </Grid>
        <Grid item>
          <motion.div animate={{marginLeft:{state}}} >
            <Box  boxShadow={8} className={classes.box3}> </Box>
          </motion.div>
          
        </Grid>
      </Grid>



     <motion.h1 initial={{x:-550}} animate={{x: -7}} transition={{delay:3}}>some random text</motion.h1>

      
        <Button
         variant='contained' onClick={()=>{setstate('300px')}} color='secondary'
        >
            click
        </Button>






    </div>
  );
}

export default Slider
