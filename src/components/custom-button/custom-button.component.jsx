import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, signInWithGoogle, ...otherProps }) => {
  return (
    <button
      className={`${signInWithGoogle ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
