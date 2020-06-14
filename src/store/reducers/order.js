import * as Actions from "../actions/actionTypes";
//import Orders from '../../containers/Orders/Orders'

const initialState = {
  orders:[],
  loading: false,
  purchased: false
}

const reducer = (state = initialState, action)=>{
  switch(action.type){
    case Actions.PURCHASE_INIT:
      return {
        ...state
      }
    case Actions.PURCHASE_ORDER_FAIL:
      return {
        ...state,
        loading: false
      }
    case Actions.PURCHASE_ORDER_SUCCESS:
      const newOrder = {
        order: action.orderData
      }
      return {
        ...state,
        orders: state.orders.concat(newOrder),
        loading:false,
        purchased: true
      }
    case Actions.PURCHASE_ORDER_START: 
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

export default reducer;
