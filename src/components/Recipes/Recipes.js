import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Recipe.css';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {  Button } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CardRecipe from '../CardRecipe/CardRecipe';
import { useSelector } from 'react-redux';
import { selectEmail } from '../../features/userEmailSlice';

const useStyles = makeStyles({
    gridContainer: {
        marginLeft:'auto',
        marginRight:'auto',width: '90%'
    }
  });
function Recipes() {
    const [recipesNumber,setRecipesNumber]=useState(0);
    const [food,setFood]=useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const classes = useStyles();
    const userEmail = useSelector(selectEmail);
    const newPage = (direction) => {
      if (direction === "next") {
        setCurrentPage(currentPage + 10);
      } else if (direction === "previous"  ) {
        setCurrentPage(currentPage - 10);
      }
    };
    useEffect(()=>{
        axios.get(`/recipes/${userEmail}`).then(res => setRecipesNumber(res.data))
    },[userEmail])
  useEffect(()=>{
    axios.get(`/recipes/${userEmail}/page/${currentPage}`).then(res => setFood(res.data));
  },[userEmail,currentPage])

  console.log(currentPage);
    return (
        <div className="container__recipes">
            <div className="wrap__recipies">
                <div className="recipe__text">
                        <span className="nr_elemente">
                            {recipesNumber.length} {recipesNumber.length === 1 ? "Recipe" : "Recipes"}
                    </span>
                </div>
                    {food.length > 0 ? ( 
                        <Grid
                        container
                        spacing={4}
                        className={classes.gridContainer}
                        justifyContent="center"
                      >
                    {food.map((item,index)=>(
                        
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <CardRecipe id={item._id} title={item.title} time={item.time} />
                        </Grid>
                       
                    ))}
                    </Grid>
                    ) : (
                         <h2 className="noElement">No recipes in your list! Add some!</h2>
                    )}

                    
                <div className="buttons__container">
                  {currentPage >= 10 ? (<Button
            onClick={()=>newPage("previous")}
            startIcon={<NavigateBeforeIcon fontSize="large"/>}
            //className="button__page"
            style={{
                minWidth: '15vw',
                marginTop:'15px',
                marginLeft:'10px',
                marginBottom:'15px',
                color: "white !important" ,
                padding: '15px',
                borderRadius:'30px',
                backgroundColor: currentPage >= 10 ? "white" : "lightgray",
                // cursor: currentPage >= 10 ? "pointer" : "not-allowed !important",
                pointerEvents: currentPage >=10 ? "all" : "none",
                
                }}
            >Prev recipes
            </Button>) : (null)}
            {currentPage <=recipesNumber.length-10 ? (<Button
            style={{
                //backgroundColor:'white',
                marginTop:'15px',
                marginLeft:'10px',
                marginBottom:'15px',
                color:'white',
                padding: '15px',
                borderRadius:'30px',
                minWidth:'15vw',
                flexWrap:'nowrap',
                backgroundColor: currentPage >= recipesNumber.length-10 ? "lightgray" : "white",
                pointerEvents: currentPage >=recipesNumber.length-10 ? "none" : "all",
            }}
            onClick={()=>newPage("next")}
            endIcon={<NavigateNextIcon fontSize="large"/>}
            className="button__page"
            >Next recipes
            </Button>) : (null) }
            
                         
                </div>
            </div>
        </div>
    )
}

export default Recipes
