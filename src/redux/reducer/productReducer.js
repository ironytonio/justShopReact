import { ActionTypes } from "../contants/action-types";

const initialStateOne = {
  products: [],
};

export const productReducer = (state = initialStateOne, { type, payload }) => {
  // (state, action)
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {} , {type ,payload}) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
return payload
    default:
      return state
  }
}

const initialStateTwo = {
  cart: [],
};

export const addCartReducer = (state = initialStateTwo , { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    default:
      return state;
  }
};




export const returnCartReducer = (state = {} , {type ,payload}) => {
  switch (type) {
    case ActionTypes.REMOVE_FROM_CART:
      return {...state , cart:state.cart.filter((item) => item.id !== payload),};
    default:
      return state
  }
}