import React, { Component } from "react";
import SignIn from "../../components/sign-in/sign-in.component.jsx";
import SignUp from "../../components/sign-up/sign-up.component.jsx";
import { SigninSignupContainer } from "./signin-signup.styles";

class SignInAndSignUpPage extends Component {
  render() {
    return (
      <SigninSignupContainer>
        <SignIn />
        <SignUp />
      </SigninSignupContainer>
    );
  }
}

export default SignInAndSignUpPage;
