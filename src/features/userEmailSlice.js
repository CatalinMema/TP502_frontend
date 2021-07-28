import { createSlice } from "@reduxjs/toolkit";

export const userEmailSlice = createSlice({
    name: 'email',
    initialState:{
        email: null,
    },
    reducers:{
        setUserEmail:(state,action)=>{
            state.email=action.payload;
        },
        setUserEmailToNull:(state)=>{
            state.email=null;
        },
    }
})
export const {setUserEmail,setUserEmailToNull} = userEmailSlice.actions;
export const selectEmail = (state)=>state.email.email;
export default userEmailSlice.reducer;