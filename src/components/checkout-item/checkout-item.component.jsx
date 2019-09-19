import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { removeItem } from "../../redux/cart/cart-action";

const CheckoutItem = ({ cartItem, removeItem }) => {
  const { quantity, name, imageUrl, price } = cartItem;
  return (
    <div className="checkout-item">
      <img className="image-container" alt="item" src={imageUrl}></img>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
