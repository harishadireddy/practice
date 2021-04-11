import React from 'react';
import {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {FormControl,FormHelperText,InputLabel,Input,Grid,Button} from '@material-ui/core';



const Practice= ()=>{

return(
<>
<form>
      <Grid direction="column" container alignItems="center" justify="center">
          <Grid item>
<FormControl>
  <InputLabel htmlFor="my-input">FIRST NAME</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">please fill your first name</FormHelperText>
</FormControl>
  </Grid>
  <Grid item>
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl></Grid>
<Button type={'submit'}> submit</Button>
</Grid>

</form>


</>

);


}


export default Practice;