import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Recipes from './components/Recipes/Recipes';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
function App() { 
  return (
    <Router>
    <div className="App">
    <Switch>
        <Route exact path="/">
        <Header />
          <Home />
        </Route>
        <Route exact path="/recipes">
        <Header />
        <Recipes />
        </Route>
        <Route exact path="/signin">
          <SignIn/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
   </Switch>
    </div>
    </Router>
  );
}

export default App;
