import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  SignInContainer,
  ButtonsContainer,
  SignInTitle
} from "./sign-in.styles";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user-actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setScredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const onChange = e => {
    e.preventDefault();
    setScredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <p>Sign in with your email and password.</p>

      <form onSubmit={onSubmit}>
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
          onChange={this.onChange}
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            signInWithGoogle
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
