import React, { Component } from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
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
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <p>Sign up with your email and password.</p>

        <form onSubmit={this.onSubmit}>
          <FormInput
            required
            type="text"
            name="email"
            label="Display Name"
            value={this.state.email}
            onChange={this.onChange}
          />
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
          <FormInput
            required
            type="password"
            name="password"
            label="Confirm Password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
