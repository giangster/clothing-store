import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import { toggleCartStatus } from "../../redux/cart/cart-action";

import { selectCartItems } from "../../redux/cart/cart-selectors";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  CartDropdownButton
} from "./cart-dropdown.styles";

const Cart = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item, index) => <CartItem key={index} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CartDropdownButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartStatus());
        }}
      >
        CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
