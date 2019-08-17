import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";

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
        <p>Sign in with your email and password</p>

        <form onSubmit={this.onSubmit}>
          <FormInput
            required
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <FormInput
            required
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <input type="submit" value="Log in" />
        </form>
      </div>
    );
  }
}

export default SignIn;
