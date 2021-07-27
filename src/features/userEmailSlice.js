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
    }
})
export const {setUserEmail} = userEmailSlice.actions;
export const selectEmail = (state)=>state.email.email;
export default userEmailSlice.reducer;