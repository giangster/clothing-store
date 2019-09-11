import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = props => (
  <div className="cart-icon">
    <button onClick={props.toggleCartStatus}>
      {" "}
      <ShoppingIcon className="shopping-icon" />
    </button>
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
