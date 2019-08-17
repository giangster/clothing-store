import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ onChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={onChange} {...otherProps}>
        {label ? (
          <label className={`${label.length ? "shrink" : ""}form-input`}>
            {label}
          </label>
        ) : null}
      </input>
    </div>
  );
};

export default FormInput;
