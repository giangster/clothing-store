import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectDirectorySections = createSelector(
  [selectShop],
  shop => shop.collections
);
