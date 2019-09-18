import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { removeItem } from "../../redux/cart/cart-action";

const CheckoutItem = ({ quantity, name, imageUrl, price }, removeItem) => {
  return (
    <div className="checkout-item">
      <img className="image-container" alt="item" src={imageUrl}></img>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeItem}>
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
