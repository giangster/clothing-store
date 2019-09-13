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
