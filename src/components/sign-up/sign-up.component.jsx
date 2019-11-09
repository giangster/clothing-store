import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";
import { signUpStart } from "../../redux/user/user-actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const onChange = e => {
    e.preventDefault();
    setCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password doesn't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I don't have an account</SignUpTitle>
      <p>Sign up easily now!</p>

      <form className="sign-up-form" onSubmit={onSubmit}>
        <FormInput
          required
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          onChange={onChange}
        />
        <FormInput
          required
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={onChange}
        />
        <FormInput
          required
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={onChange}
        />
        <FormInput
          required
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={onChange}
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: user => dispatch(signUpStart(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
