import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        authIs: false,
    },
    reducers:{
        setAuthTrue : (state)=>{
            state.authIs=true;
        },
        setAuthFalse: (state)=> {
            state.authIs=false;
        },
        setAuthToDataReceived:(state,action) =>{
            state.authIs = action.payload;
        }
    }
})
export const {setAuthTrue,setAuthFalse,setAuthToDataReceived} = authSlice.actions;
export const selectAuthState = (state)=>state.auth.authIs;
export default authSlice.reducer;