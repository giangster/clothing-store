import { SHOP_DATA } from "./shop-data";

const ORIGIN_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = ORIGIN_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
