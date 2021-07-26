import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Recipe.css';
import CardCreated from '../CardCreated/CardCreated';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {  Button } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Modal from '@material-ui/core/Modal';
import { selectOpenRecipe, selectRecipe } from '../../features/recipeSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CardRecipe from '../CardRecipe/CardRecipe';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }


  const useStylesModal = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const useStyles = makeStyles({
    gridContainer: {
        marginLeft:'auto',
        marginRight:'auto',width: '90%'
    }
  });
function Recipes() {
    const [food,setFood]=useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const openModal = useSelector(selectRecipe);
    const selectedRecipe = useSelector(selectOpenRecipe);
    console.log(selectedRecipe)
    const dispatch = useDispatch();
    console.log(openModal)
    const classes = useStyles();
    const classesModal = useStylesModal();
    const [modalStyle] = useState(getModalStyle);
  
    const newPage = (direction) => {
      if (direction === "next") {
        setCurrentPage(currentPage + 10);
      } else if (direction === "previous" && currentPage !== 1) {
        setCurrentPage(currentPage - 10);
      }
      console.log(currentPage)
    };
    
  useEffect(()=>{
    axios.get(`/recipes/page/${currentPage}`).then(res => setFood(res.data))
  },[currentPage])

 
 
    return (
        <div className="container__recipes">
            <div className="wrap__recipies">
                <div className="recipe__text">
                    
                        <span className="nr_elemente">
                            {food.length} {food.length === 1 ? "Recipe" : "Recipes"}
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
                        
                           <Grid key={index} item xs={12} sm={6} md={2}>
                            <CardRecipe title={item.title} ingredients={item.ingredients} time={item.time} prep_mode={item.preparation_mode} />
                        </Grid>
                       
                    ))}
                    </Grid>
                    ) : (
                         <h2 className="noElement">No recipes in your list! Add some!</h2>
                    )}
                <div className="buttons__container">
                <Button
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
            </Button>
            <Button
            style={{
                backgroundColor:'white',
                marginTop:'15px',
                marginLeft:'10px',
                marginBottom:'15px',
                color:'white',
                padding: '15px',
                borderRadius:'30px',
                minWidth:'15vw',
                flexWrap:'nowrap'
            }}
            onClick={()=>newPage("next")}
            endIcon={<NavigateNextIcon fontSize="large"/>}
            className="button__page"
            >Next recipes
            </Button>
                                   
                </div>
                
            </div>
            {/* <div className="recipies_number"> 
            <span className="nr_elemente">
              {food.length} {food.length === 1 ? "Recipe" : "Recipes"}
    </span>
    </div> */}
    {openModal && ( 
    <Modal
        open={true}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classesModal.paper}>
      <CardCreated title={selectedRecipe.title} ingredients={selectedRecipe.ingredients} time={selectedRecipe.time} prep_mode={selectedRecipe?.prep_mode} />
     
      {/* <p id="simple-modal-description">
        {selectedRecipe?.preparation_mode}
      </p> */}
    
    </div>
      </Modal>
      )}
   
        </div>
    )
}

export default Recipes
