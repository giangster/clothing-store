import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils.js";
import { auth } from "firebase";
import {
  SignInContainer,
  ButtonsContainer,
  SignInTitle
} from "./sign-in.styles";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <p>Sign in with your email and password.</p>

        <form onSubmit={this.onSubmit}>
          <FormInput
            required
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <FormInput
            required
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <ButtonsContainer>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} signInWithGoogle>
              Sign in with Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
