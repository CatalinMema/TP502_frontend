import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Recipes from './components/Recipes/Recipes';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import axios from 'axios';
import { useEffect } from 'react';
import { responsiveFontSizes } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthState, setAuthTrue } from './features/authSlice';
import { selectEmail, setUserEmail } from './features/userEmailSlice';
function App() { 
  const dispatch = useDispatch();
  const emailUser= useSelector(selectEmail);
  console.log(emailUser)
  const userIsSignIn = async () =>{
    const response = await axios.get(`/authentication/signedin/${emailUser}`);
    return response;
  }
  const readSession = async () =>{
    const response=await userIsSignIn();
    if(response.data.auth){
      dispatch(setAuthTrue());
    //  dispatch(setUserEmail(response.data.emailOfUser))
    }
    console.log(response)
  }

  const emailAtuh = async () =>{
    const response = await axios.get(`/user/email`);
    return response;
  }
  const readEmail = async () =>{
    const response=await emailAtuh();
    if(response.data.emailAuth){
     // dispatch(setAuthTrue());
      dispatch(setUserEmail(response.data.emailAuth))
    }
    console.log(response)
  }

  useEffect(()=>{
    readSession();
    readEmail();
    //dispatch(setUserEmail("adresa@gmail"))
  },[])
  const stateOfAuth= useSelector(selectAuthState);
  return (
    <Router>
    <div className="App">
     {stateOfAuth ? (<Header />) : (null)}    
    <Switch>
    <RouteProtected exact path="/"
         component={ Home} 
         auth={stateOfAuth}
      />
      <RouteProtected exact path="/recipes"
         component={Recipes} 
         auth={stateOfAuth}
      />
        <RouteRegisteration 
        exact path="/signin"
         component={SignIn}
         auth={stateOfAuth}
        />
        <RouteRegisteration 
        exact path="/signup"
         component={SignUp}
         auth={stateOfAuth}
        />
        
   </Switch>
    </div>
    </Router>
  );
}

const RouteRegisteration = ({ auth, component: Component}) => {
  return (
    <Route
      render={(props) =>
        !auth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const RouteProtected = ({ auth, component: Component }) => {
  return (
    <Route
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default App;
