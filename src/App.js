import './App.css';
import axios from "axios";
import {useState,useEffect} from "react";
import RecipeForm from './components/RecipeForm/RecipeForm';
import CardCreated from './components/CardCreated/CardCreated';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Recipes from './components/Recipes/Recipes';
function App() { 
  const [food,setFood]=useState([]);
  useEffect(()=>{
    axios.get('/recipes').then(res => setFood(res.data))
  },[])
   

 
  
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
     
       
      {/* <div className="top_part">
      <RecipeForm />
      <CardCreated />
      </div>
     <div className="food__items">
      {food && food.map((item,index)=>(
        // <div key={`${index}`}>
        // <h1 >{item.title}</h1>
        // <h1 >{item.ingredients}</h1>
        // <h1 >{item.time}</h1>
        // <h1>{item.preparation_mode}</h1>
        //   </div>
        <div key={`${index}`} >
          <CardCreated item={item} />
      </div>
      ))}
      </div> */}
    </div>
    </Router>
  );
}

export default App;
