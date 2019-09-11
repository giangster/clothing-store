import { CartActionTypes } from "./cart-types.js";

const ORIGIN_STATE = {
  hidden: true
};

const cartReducer = (state = ORIGIN_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_STATUS:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
