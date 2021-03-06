import React from "react";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from "./form-input.styles";

const FormInput = ({ onChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={onChange} {...otherProps} />
      {label ? (
        <FormInputLabel className={otherProps.value.length ? "shrink" : ""}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
