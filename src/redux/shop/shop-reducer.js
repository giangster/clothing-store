import ShopActionTypes from "./shop-types";

const ORIGIN_STATE = {
  collections: null
};

const shopReducer = (state = ORIGIN_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
