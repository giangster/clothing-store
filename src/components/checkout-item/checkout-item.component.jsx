import React from "react";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart-action";
import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  TextContainer,
  RemoveButtonContainer
} from "./checkout-item.styles";

const CheckoutItem = ({
  cartItem,
  removeItemFromCart,
  increaseItem,
  removeItem
}) => {
  const { quantity, name, imageUrl, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl}></img>
      </ImageContainer>

      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => increaseItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => removeItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  increaseItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
