import React from "react";
import { connect } from "react-redux";
import { toggleCartStatus } from "../../redux/cart/cart-action";
import { createStructuredSelector } from "reselect";
import { selectCountTotalItems } from "../../redux/cart/cart-selectors";
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartStatus, totalItems }) => (
  <CartIconContainer onClick={toggleCartStatus}>
    <ShoppingIconContainer className="shopping-icon" />
    <ItemCountContainer>{totalItems}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartStatus: () => dispatch(toggleCartStatus())
});

const mapStateToProps = createStructuredSelector({
  totalItems: selectCountTotalItems
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
