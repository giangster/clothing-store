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

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  render() {
    return (
      <div>
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>

        <form onSubmit={this.handleChange}>
          Email: <br />
          <input
            required
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <br />
          Password: <br />
          <input
            required
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <br />
          <input type="submit" value="Log in" />
        </form>
      </div>
    );
  }
}

export default SignIn;
