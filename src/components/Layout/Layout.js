import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from "./Layout.module.css";
//import SaladBuilder from "../../containers/SaladBuilder/SaladBuilder";
import Toolbar from "../Navigation/Toolbar/Toolbar";


const layout = (props)=>{
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
}

export default layout;