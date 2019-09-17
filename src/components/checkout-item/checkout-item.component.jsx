import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ quantity, name, imageUrl, price }) => {
  return (
    <div className="checkout-item">
      <img className="image-container" alt="item" src={imageUrl}></img>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <button className="remove-button">x</button>
    </div>
  );
};

export default CheckoutItem;
