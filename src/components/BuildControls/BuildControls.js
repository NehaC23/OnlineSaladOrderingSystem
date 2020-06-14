import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {label:'Avocado', type:'avocado'},
  {label:'Anion', type:'anion'},
  {label:'Berries', type:'berries'},
  {label:'Parsley', type:'parsley'}
]

const buildControls = (props)=>{

  let ctrl =  controls.map((ingred, id)=>{
      return <BuildControl 
                Label={ingred.label} 
                type={ingred.label} 
                key={ingred.label+ingred.id} 
                addIngred={()=>{props.addIngredient(ingred.label)}}  
                removeIngred={()=>{props.removeIngredient(ingred.label)}}  
                disable={props.disableInfo[ingred.label]} 
                />
                
  })

  return (
    <div className={classes.BuildControls}>
      <p>Current Price: {props.price}</p>
      {ctrl}
      <button 
        className={classes.OrderButton} 
        disabled={!props.disableOrderButton} 
        onClick={props.ordered}
        >ORDER NOW</button>
    </div>
  )
}

export default buildControls;