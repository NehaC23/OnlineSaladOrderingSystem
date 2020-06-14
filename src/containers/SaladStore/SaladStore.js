import React,{ Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Salad from "../../components/Salad/Salad";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Axios from "../../hoc/axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as ActionName from "../../store/actions/index";



class SaladStore extends Component{
  state={
    isPurchasable: false,
    purchasing: false,
    isLoading:false,
    //error:false
  }

  componentDidMount(){
    this.props.onInitIngredientHandler();
  }

  isPurshasingHandler = ()=>{
    this.setState({purchasing: true})
  }


  hideBackdropHandler = ()=>{
    this.setState({purchasing: false});
    this.props.history.goBack();
  }

  continueOrderHandler = ()=>{
    this.props.onPurchaseInit();
    this.props.history.push('/checkout');
  }


  enableOrderButtonHandler = (dupIngredients)=>{
    let sum = Object.keys(this.props.ingPrice).map((Ingredient)=>{
        return dupIngredients[Ingredient];
    }).reduce((summ, el)=>{
      return summ + el;
    },0);
    return sum > 0;
  }


  render(){
    const disabledInfo = {
      ...this.props.ingPrice
    };

    for(let x in disabledInfo){
      disabledInfo[x] = disabledInfo[x] <= 0;
    };



    
    let salad =this.props.err? <p>Ingrdient Not Available, Application is Down</p>:<Spinner/>;
    let orderSummary = null
    if(this.props.ing){
      salad =  (       <>
        <Salad Ingredient={this.props.ing} />
        <BuildControls  
        addIngredient={this.props.onAddIngredientHandler} 
        removeIngredient={this.props.onRemoveIngredientHandler} 
        disableInfo={disabledInfo} 
        price={this.props.tPrice.toFixed(2)} 
        disableOrderButton={this.enableOrderButtonHandler(this.props.ing)}  
        ordered={this.isPurshasingHandler}
        />
        </>
      )
      orderSummary= <OrderSummary 
      AllIngredient={this.props.ing} 
      totalPrice={this.props.tPrice} 
      closeOrder={this.hideBackdropHandler} 
      continueOrder={this.continueOrderHandler} />
    }

    if(this.state.isLoading){
      orderSummary = <Spinner/>
     }

    return (
      <Aux>
        <Modal show={this.state.purchasing} showHideBackdrop={this.hideBackdropHandler}>
          {orderSummary}
        </Modal>
        {salad}
      </Aux>
    );
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    onAddIngredientHandler: (ingred)=>{dispatch(ActionName.add_ingredient(ingred))},
    onRemoveIngredientHandler: (ingred)=>{dispatch(ActionName.remove_ingredient(ingred))},
    onInitIngredientHandler: (ingred)=>{dispatch(ActionName.init_ingredient())},
    onPurchaseInit : ()=>{dispatch(ActionName.purchaseInit())}
  }
}

const mapStateToProps = (state)=>{
  return {
    ing:state.saladReducer.Ingredients,
    ingPrice:state.saladReducer.IngredientsPrice,
    tPrice: state.saladReducer.totalPrice,
    err: state.saladReducer.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(SaladStore, Axios));