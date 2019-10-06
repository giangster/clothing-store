import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  auth,
  createUserProfileDocument
} from "../../firebase/firebase.utils.js";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
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

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password doesn't match");
      return;
    }

    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>I don't have an account</SignUpTitle>
        <p>Sign up easily now!</p>

        <form className="sign-up-form" onSubmit={this.onSubmit}>
          <FormInput
            required
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            onChange={this.onChange}
          />
          <FormInput
            required
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={this.onChange}
          />
          <FormInput
            required
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.onChange}
          />
          <FormInput
            required
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.onChange}
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
