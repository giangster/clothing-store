import React, { Component } from "react";
import "./signin-signup.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component.jsx";
import SignUp from "../../components/sign-up/sign-up.component.jsx";

class SignInSignUpPage extends Component {
  render() {
    return (
      <div>
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default SignInSignUpPage;
