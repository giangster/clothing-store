import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectTotalCart,
  selectCartItems
} from "../../redux/cart/cart-selectors";

const CheckoutPage = ({ cartItems, totalCart }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Products</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.length
      ? cartItems.map((item, index) => <div>{item.name}</div>)
      : null}
    <div className="total">Total: €{totalCart}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCart: selectTotalCart
});

export default connect(mapStateToProps)(CheckoutPage);
