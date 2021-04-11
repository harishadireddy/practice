import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {motion} from 'framer-motion'
import { Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    padding:20,
    height: 150,
    width: 200,
    margin:"20px auto",
    backgroundColor:"RED",
    color:"yellow",
    textAlign: "center",
    animation: "$slideDown 2.9s"
    

    
  },
  "@keyframes slideDown": {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  boot:{
        padding:20,
    height: 150,
    width: 200,
    margin:"20px auto",
    backgroundColor:"yellow",
    color:"red",
    textAlign: "center",
    transition: '1s' ,


  }
}));

function PaperSheet() {
  const classes = useStyles();


  return (
    <div>
      <Grid container direction="row" alignItems="center" justify="center" spacing={6} >
                  
                  <Grid item >
                     <Paper className={classes.root} elevation={10}  >ONE</Paper>
                  </Grid>
                  <Grid item >
                     <Paper className={classes.root} elevation={10}>TWO</Paper>
                  </Grid>
                  <Grid item >
                     <Paper className={classes.root} elevation={10}>THREE</Paper>
                  </Grid>
                  <Grid item >
                     <Paper className={classes.root} elevation={10}>FOUR</Paper>
                  </Grid>
                  <Grid item >
                     <Paper className={classes.boot} elevation={10}  >FIVE</Paper>
                  </Grid>
                  <Grid item >
                     <motion.div
                    whileHover={{scale:1.1}}>
                      
                          <Paper className={classes.boot} elevation={10}>SIX</Paper>
                     </motion.div>
                   
                  </Grid>
                  <Grid item >
                     <Paper className={classes.boot} elevation={10}>SEVEN</Paper>
                  </Grid>
                  <Grid item >
                     <Paper className={classes.boot} elevation={10}>EIGHT</Paper>
                  </Grid>
                  
      </Grid>
          
    </div>
  );
}

export default  PaperSheet;