import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Practice from './practice';
import Image from './images/pic.jpg'
const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto",backgroundColor:'transparent', backdropFilter:'blur(5px)'
}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(<div style={{backgroundImage:`url(${Image})`}}>
  
         
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                    
                </Typography>
                <Typography > Do you have an account ?
                    
                </Typography>
            </Paper>
        </Grid>
        <BrowserRouter><nav><Link to="/practice">Practice</Link></nav>


 <Route path="/practice" component={Practice} />  </BrowserRouter>
          
</div>

    )
}

export default Login

