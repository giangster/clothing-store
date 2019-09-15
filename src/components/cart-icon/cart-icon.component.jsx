import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import "./cart-icon.styles.scss";
import { toggleCartStatus } from "../../redux/cart/cart-action";
import { selectCountTotalItems } from "../../redux/cart/cart-selectors";

const CartIcon = ({ toggleCartStatus, totalItems }) => (
  <div className="cart-icon" onClick={toggleCartStatus}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{totalItems}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartStatus: () => dispatch(toggleCartStatus())
});

const mapStateToProps = state => ({
  totalItems: selectCountTotalItems(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
