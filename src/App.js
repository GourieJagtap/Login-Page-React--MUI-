import { Box, Container, makeStyles, Paper, Typography,TextField, Button,InputAdornment,createTheme } from '@material-ui/core';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import React, { useState } from 'react'
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 500,
      sm: 650,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
const useStyles = makeStyles((theme)=>({
  root:{
    height:"100vh",
    width:"100vw",
    backgroundColor:"#c5cae9",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  paper:{
    width:"30vw",
    backgroundColor:"#fff",
    [theme.breakpoints.down('sm')]: {
      width:"50vw"
    },
    [theme.breakpoints.down('xs')]: {
      width:"80vw"
    },
    [theme.breakpoints.up('md')]: {
      width:"30vw"
    },
  },
  login:{
      backgroundColor:"#1565c0",
      padding:20,
      color:"white",
      fontSize:"30",
      [theme.breakpoints.down('md')]: {
        padding:10,
        fontSize:"1.5em"
      },
  },
  form:{
    backgroundColor:"white",
    padding:10,
  },
  btn:{
    backgroundColor:"#1565c0",
    color:"white",
  },
}))


const App = () => {
  
const [setname,newname] = useState("");
const [setemail,newemail] = useState("");
const [setmessage,newmessage] = useState("");
const [setEntry,newEntry]=useState("");


const SubmitHandler =(e)=>{
  e.preventDefault();
  const newentry={setname:setname,setemail:setemail,setmessage:setmessage}

  newEntry([...setEntry,newentry])
  
  alert("Registered Successfully!")
  newemail("");
  newname("");
  newmessage("");
  
}

  const classes= useStyles();
  return (
    <Container className={classes.root} >
      <Paper component={Box} className={classes.paper} elevation={24}>
        <Typography variant="h4" align="center" className={classes.login}>Register</Typography>
        <Box component="form" className={classes.form} onSubmit={SubmitHandler}>
          <TextField 
            required 
            label="Full Name" 
            color="secondary" 
            fullWidth margin="normal" 
            variant="outlined" 
            placeholder="Enter your Full Name" 
            size="small" 
            value={setname}
            onChange={(e)=>newname(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle fontSize="small"/>
                </InputAdornment>
              ),
            }}>
          </TextField>
          <TextField 
            required 
            label="Email" 
            color="secondary" 
            fullWidth margin="normal" 
            variant="outlined" 
            placeholder="Enter your email" 
            size="small"
            value={setemail} 
            onChange={(e)=>newemail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon fontSize="small"/>
                </InputAdornment>
              ),
            }}>
          </TextField>
          <TextField 
            label="message" 
            color="secondary" 
            fullWidth 
            margin="normal" 
            variant="outlined" 
            placeholder="Enter your message" 
            size="small" 
            multiline 
            rows={4}
            value={setmessage} 
            onChange={(e)=>newmessage(e.target.value)}>
          </TextField>
          <Button variant="contained" type="submit" className={classes.btn}>Register</Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default App