import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCountTotalItems = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (totalItems, cartItem) => totalItems + cartItem.quantity,
      0
    )
);
