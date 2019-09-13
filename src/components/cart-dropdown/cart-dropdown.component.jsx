import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

const Cart = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => (
        <li>{item}</li>
      ))}
    </div>
    <CustomButton> CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(
  null,
  mapStateToProps
)(Cart);
