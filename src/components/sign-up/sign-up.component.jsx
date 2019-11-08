import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";
import { signUpStart } from "../../redux/user/user-actions";

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
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password doesn't match");
      return;
    }

    signUpStart({ displayName, email, password });
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

const mapDispatchToProps = dispatch => ({
  signUpStart: user => dispatch(signUpStart(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
