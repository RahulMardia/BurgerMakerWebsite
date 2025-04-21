import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const naviagtionItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        { props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        { !props.isAuthenticated
            ? <NavigationItem link="/auth">Authentication</NavigationItem>
            : <NavigationItem link="/logout">LOGOUT</NavigationItem>
        }
    </ul>
);

export default naviagtionItems;
