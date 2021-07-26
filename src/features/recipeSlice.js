import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
    name:'recipe',
    initialState:{
        selectRecipeToShow:null,
        modalOpen:false,
    },
    reducers:{
        selectRecipeToShow:(state,action)=>{
            state.selectRecipeToShow=action.payload;
        },
        openModal: (state) =>{
            state.modalOpen = true;
        },
        closeModal:(state)=>{
            state.modalOpen= false;
        },
    }
})

export const {openModal,closeModal,selectRecipeToShow} = recipeSlice.actions;
export const selectRecipe = (state)=>state.recipe.modalOpen;
export const selectOpenRecipe = (state) => state.recipe.selectRecipeToShow;

export default recipeSlice.reducer;