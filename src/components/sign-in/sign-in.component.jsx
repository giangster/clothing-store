import React, { Component } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  SignInContainer,
  ButtonsContainer,
  SignInTitle
} from "./sign-in.styles";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user-actions";

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

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  render() {
    const { googleSignInStart } = this.props;

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
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              signInWithGoogle
            >
              Sign in with Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
