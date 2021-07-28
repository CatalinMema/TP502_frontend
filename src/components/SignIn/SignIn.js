import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuthTrue } from '../../features/authSlice';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import './SignIn.css';
import { setUserEmail } from '../../features/userEmailSlice';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
      
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
    const dispatch = useDispatch();
    const [email,setEmail]=useState(undefined);
    const [password,setPassword]=useState(undefined);
    const signin = async (user) => {
        const result =await axios.post("/authentication/signin",user);
        return result;
    }
    const handleOnChange = (e) =>{
        if(e.target.name==='email'){
            setEmail(e.target.value);
        }
        else{
            setPassword(e.target.value)
        }
    }
    const handleSignIn = async (e) => {
        e.preventDefault();
        const response = await signin({email,password});
        if(response.data.auth){
            dispatch(setAuthTrue());
            
            dispatch(setUserEmail(response.data.emailOfUser))
        }
        console.log(response)
    }
    
  const classes = useStyles();
    
  return (
      <div  className="signin_page">
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FastfoodIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleOnChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleOnChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
               
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container></div>
  );
}