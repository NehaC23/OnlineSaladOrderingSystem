import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems =(props)=>{
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem exact link="/" >Home</NavigationItem>
      <NavigationItem link="/salad-store">Salad Ingredient Store</NavigationItem>
      <NavigationItem link="/checkout">Checkout</NavigationItem>
    </ul>
  )
}

export default navigationItems;