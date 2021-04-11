import React from 'react'
import {motion} from 'framer-motion';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Typography} from '@material-ui/core'

const useStyels = makeStyles(()=>({
    box:{
        height:'300px',
        width:'300px'
    },
     root: {
    maxWidth: 400,
    height:'400px',
    animation:"$example 3s",
    
    

  },
  "@keyframes  example":{
      from:{opacity:0,marginLeft:-200},
      to:{opacity:1,marginLeft:0}

  },
  media: {
    height: 200,
   
  },
 
}));

const variants ={
    from:{
        opacity:0
    },
     to:{
        opacity:1
    },
    
}
function Practice() {
    const classes = useStyels();
    return (
        <div>

            
                  
                  <motion.h3 initial={{y:-250}} animate={{y:-10}}>Welcome To ANIMATION</motion.h3>
                  <motion.p variants={variants} initial="from" animate="to" transition={{delay:0.5}}>THIS IS A PARAGRAPH</motion.p>

           
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
         className={classes.media}
          image={'./Logo.png'}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.card}>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
  
    </Card>

    
            
        </div>
    )
}

export default Practice
