import ShopActionTypes from "./shop-types";

const ORIGIN_STATE = {
  collections: null,
  isFetching: false,
  message: ""
};

const shopReducer = (state = ORIGIN_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
