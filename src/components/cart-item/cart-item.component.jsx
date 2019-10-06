import React from "react";
import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemImage
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <CartItemContainer>
    <ItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x €{price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
