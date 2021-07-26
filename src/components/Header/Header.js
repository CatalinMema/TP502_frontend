import React from 'react'
import { useHistory } from 'react-router-dom';
import "./Header.css";
function Header() {
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
                <p>Account</p>
            </div>
        </div>
    )
}

export default Header
