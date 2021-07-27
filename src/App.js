import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Recipes from './components/Recipes/Recipes';
function App() { 
  return (
    <Router>
    <div className="App">
         <Header />
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/recipes">
         <Recipes />
        </Route>
   </Switch>
    </div>
    </Router>
  );
}

export default App;
