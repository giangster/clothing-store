import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils.js";

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
      [e.target.name]: [e.target.value]
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <p>Log in with your email and password.</p>

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
          <CustomButton type="submit">Log in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Log in with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
