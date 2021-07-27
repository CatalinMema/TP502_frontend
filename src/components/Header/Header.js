import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setAuthToDataReceived } from '../../features/authSlice';
import "./Header.css";
function Header() {
    const dispatch = useDispatch();
    const signout= async() => {
        const response = await axios.get("/authentication/signout");
        return response;
    }
    const handleSignOut = async () => {
        const response = await signout();
        dispatch(setAuthToDataReceived(response.data.auth))
    }
    const history= useHistory();
    return (
        <div className="container__header">
            <p className="title__header">
                CookBook
            </p>
            <div className="header__menu">
                  <p onClick={()=>history.push("/")}>New Recipe </p>
                  <p onClick={()=>history.push("/recipes")}>Your recipes</p>
              
            </div>
            <div className="right__menu">
                <p onClick={handleSignOut}>Sign Out</p>
            </div>
        </div>
    )
}

export default Header
