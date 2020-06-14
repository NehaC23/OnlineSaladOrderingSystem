import * as ActionName from "../actions/actionTypes";

// const INGREDIENT_PRICE={
//   meat: 0.5,
//   salad:0.4,
//   cheese:0.3,
//   bacon:0.1
// }

const initialState = {
  Ingredients:{},
  IngredientsPrice:{},
  totalPrice: 4,
  error: false
}


const reducer = (state= initialState, action)=>{
  switch (action.type) {
    case ActionName.ADD_INGREDIENT:
      return {
        ...state,
        Ingredients:{
          ...state.Ingredients,
          [action.ingredName]: state.Ingredients[action.ingredName] + 1
        },
        totalPrice: state.totalPrice + state.IngredientsPrice[action.ingredName]
      }
      // this.enableOrderButtonHandler(dupIngredient);
    case ActionName.REMOVE_INGREDIENT:
      if(state.Ingredients[action.ingredName] === 0)
      return state;
      return {
        ...state,
        Ingredients:{
          ...state.Ingredients,
          [action.ingredName]:  state.Ingredients[action.ingredName] - 1
        },
        totalPrice: state.totalPrice - state.IngredientsPrice[action.ingredName]
      }
    case ActionName.INIT_INGREDIENT:
      const newIngredients={};
      const newIngredientPrice = {};
      action.data.ingredients.forEach((ingredient)=>{
          newIngredients[ingredient.name] = 0;
          newIngredientPrice[ingredient.name] = ingredient.price;
      });
      return {
        ...state,
        Ingredients: newIngredients,
        IngredientsPrice:newIngredientPrice,
        totalPrice: 0
      }
    case ActionName.INIT_INGREDIENT_FAILED:  
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
}

export default reducer;