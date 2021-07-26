import React from 'react'
import RecipeForm from '../RecipeForm/RecipeForm';
import "./Home.css";
 
function Home() {
    return (
        <div className="container__home">
            <div className="wrap">
                <div className="home__text">
                    <h1>Favorite recipes!</h1>
                    <p>Make a book with all your recipies</p>
                </div>
                <div className="recipe__details">
                    <RecipeForm />
                </div>
            </div>
        </div>
    )
}

export default Home
