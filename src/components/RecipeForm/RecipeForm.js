import React, { useState } from 'react'
import {  Button } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add"
import axios from "axios";
import './RecipeForm.css';
function RecipeForm() {
    const [inputTitle,setInputTitle]= useState('');
    const [inputIngredients,setInputIngredients]= useState('');
    const [inputTime,setInputTime]= useState('');
    const [inputPrepMode,setInputPrepMode]= useState('');
    const [responde,setResponde]= useState('');
    
    const add = (e) => {
        e.preventDefault();
        axios.post("/recipes",{
            "title":inputTitle,
            "ingredients":inputIngredients,
            "time":inputTime,
            "preparation_mode":inputPrepMode
        }).then(res=>{
            console.log(res)
            if(!res.data.errors){
            setResponde(res.data);
            }
            else{
                setResponde("Error while adding the recipe!")
            }
        });
        setInputTitle("");
        setInputIngredients("");
        setInputTime("");
        setInputPrepMode("");
    }
    return (
        <div className="recipe__form">
        <form>
            <input type="text"
            placeholder="Title"
            name="title"
            className="recipe__input"
            value={inputTitle}
            onChange={(e)=> setInputTitle(e.target.value)}
            />
            <input type="text"
            placeholder="Ingredients"
            name="ingredients"
            className="recipe__input"
            value={inputIngredients}
            onChange={(e)=> setInputIngredients(e.target.value)}
            />
            <input type="number"
            placeholder="Time"
            name="time"
            className="recipe__input"
            value={inputTime}
            onChange={(e)=> setInputTime(e.target.value)}
            />
            <textarea type="text"
            placeholder="Preparation"
            name="preparation"
            className="recipe__input"
            value={inputPrepMode}
            onChange={(e)=> setInputPrepMode(e.target.value)}
            />
            <div className="button__container" >
            <Button
            onClick={add}
            startIcon={<AddIcon fontSize="large"/>}
            className="button__compose"
            >Add Recipe
            </Button>
            </div>
        </form>
        <div className="respondeForAdd">
        {responde && <p>{responde}</p>}
        </div>
       
        </div>
    )
}

export default RecipeForm


