import React, { Component } from "react";
import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div>
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>
      </div>
    );
  }
}

export default SignIn;
