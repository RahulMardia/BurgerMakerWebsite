import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NaviagtionItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
        <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
    <NaviagtionItems isAuthenticated = {props.isAuth}/>
        </nav>
        
    </header>
);


export default toolbar;