import ShopActionTypes from "./shop-types";

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
  payload: collectionsMap
});
