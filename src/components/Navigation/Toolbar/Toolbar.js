import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";


const toolbar = (props)=>{
  return (
    <header className={classes.Toolbar}>
      {/* <div>MENU</div> */}
      <nav>
        <NavigationItems/>
      </nav>
    </header>
  )
}

export default toolbar;