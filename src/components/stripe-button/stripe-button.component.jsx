import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing"
        description={`Your total is €${price}`}
        amount={priceForStripe}
        currency="EUR"
        shippingAddress
        billingAddress
      />
    </div>
  );
};

export default StripeCheckoutButton;
