import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_O3X4CTzJZzpYKwEF1qMD78VF00WOj5fSLH";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert("Payment successful!");
      })
      .catch(err => {
        console.log("Payment error: ", JSON.parse(err));
        alert(
          "There was an issue with your payment. Make sure you use the provided credit card."
        );
      });
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing"
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is €${price}`}
        amount={priceForStripe}
        currency="EUR"
        stripeKey={publishableKey}
        shippingAddress
        billingAddress
        token={onToken}
        alipay
        bitcoin
        allowRememberMe
      />
    </div>
  );
};

export default StripeCheckoutButton;
