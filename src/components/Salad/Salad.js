import React from "react";
import classes from "./Salad.module.css";
import SaladIngredient from "./SaladIngredient/SaladIngredient";

const Salad = (props) =>{
  const transformedIngredient = Object.keys(props.Ingredient).map(igKey=>{
    return [...Array(props.Ingredient[igKey])].map((_,id)=>{
      return <SaladIngredient key={igKey+id} type={igKey} />
    })
  }).reduce((arr,el)=>{
    return arr.concat(el)
  },[]);
  return (
    <div className={classes.Salad}>
        {transformedIngredient.length === 0? 
           <p>Start Adding Salad Ingredient</p>
          : transformedIngredient
        }
    </div>
  );
}

export default Salad;