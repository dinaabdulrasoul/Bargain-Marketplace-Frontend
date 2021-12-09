import { GET_CART_ITEMS, ADD_CART_ITEMS } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const cartAction = (id) => async (dispatch) => {
  let cartItems = await api.getCartItem(id);
  dispatch(addItemToCartState(cartItems));
};

export const postCartItem = (data) => async (dispatch) => {
  console.log("cart", data);
  await api.addCartItem(data);
  dispatch(addItemToCartState(data));
};

export const addItemToCartState = (data) => {
  return {
    type: ADD_CART_ITEMS,
    payload: data,
  };
};
