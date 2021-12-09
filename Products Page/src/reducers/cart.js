import { GET_CART_ITEMS, ADD_CART_ITEMS } from "../constants/actionTypes";
import { cartAction } from "../actions/cart";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      cartAction(action.id);
      break;
    case ADD_CART_ITEMS:
      console.log("CART", action);
      return [...state, action.payload];

    default:
      return state;
  }
};
