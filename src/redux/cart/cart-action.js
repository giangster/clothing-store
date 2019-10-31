import { CartActionTypes } from "./cart-types.js";

export const toggleCartStatus = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_STATUS
  };
};

export const addItem = item => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
  };
};

export const removeItemFromCart = item => {
  return {
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
  };
};

export const clearCart = () => {
  return {
    type: CartActionTypes.CLEAR_CART
  };
};
