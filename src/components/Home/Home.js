import React from "react";
import classes from "./Home.module.css";
import Button from "../UI/Button/Button";
import { Route, Redirect } from "react-router-dom";


const home = (props)=>{
  const onOrederButtonClickedHandler=()=>{
    props.history.push("/salad-store");
  }

  return (
    <div className={classes.Home}>
      <h2 className={classes.AppHeader}>Welcome to the Salad Store</h2>

      <Button btnType="Success" 
       clicked={onOrederButtonClickedHandler}
      >Order Salad</Button>
    </div>
  )
}

export default home;