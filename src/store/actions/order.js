import * as ActionNames from "../actions/actionTypes";
import Axios from "../../hoc/axios-order";


export const purchaseOrderSuccess = (orderData)=>{
  return {
    type: ActionNames.PURCHASE_ORDER_SUCCESS,
    orderData: orderData
  }
}


export const purchaseOrderFail = (error)=>{
  return {
    type: ActionNames.PURCHASE_ORDER_FAIL ,
    error: error
  }
}

export const purchaseOrderStart = ()=>{
  return {type:ActionNames.PURCHASE_ORDER_START}
}


export const purchaseOrder = (orderData)=>{
  return dispatch=>{
    dispatch(purchaseOrderStart);
      dispatch(purchaseOrderSuccess(orderData));
  }
}


export const purchaseInit = ()=>{
  return {
    type: ActionNames.PURCHASE_INIT
  }
}

