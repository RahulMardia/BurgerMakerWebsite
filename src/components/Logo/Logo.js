import React from "react";
import burgerLogo from "../../assets/images/28.1 burger-logo.png.png";
import classes from "./Logo.module.css";

const logo = (props) => (

    <div className={classes.Logo}> 
        <img src={burgerLogo} alt="Hello"/>
    </div>

);

export default logo;
