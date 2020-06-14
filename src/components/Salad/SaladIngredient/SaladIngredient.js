import React,{Component} from "react";
import PropTypes from "prop-types";
import classes from "./SaladIngredient.module.css";



class SaladIngredient extends Component{

  render(){
    let ingredient = null;
    switch(this.props.type){
      case ('Avocado'):
        ingredient = <div>Avocado</div>;
        break;
      case ('Anion'):
        ingredient = <div>Anion</div>;
        break;
      case ('Berries'):
        ingredient = <div>Berries</div>;
        break;
      case ('Parsley'):
        ingredient = <div>Parsley</div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

SaladIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default SaladIngredient;

