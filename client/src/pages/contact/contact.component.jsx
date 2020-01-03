import React, { Component } from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
  ContactPageContainer,
  AppInfoContainer,
  TitleContainer,
  ContactInfoContainer,
  ContactFormContainer
} from "./contact.styles";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      message: ""
    };
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <ContactPageContainer>
        <AppInfoContainer>
          <TitleContainer>About the app</TitleContainer>
          <p>
            This web application is an E-commerce project by Giang Nguyen built
            with Redux, Hooks, GraphQL, ContextAPI, Stripe and Firebase. The
            instructions for the project is from a MOOC course. The project is
            basically completed. There might still be chances for future further
            development.
          </p>

          <p>
            Send me an email at{" "}
            <a id="email" href="mailto: giangster.nguyen@gmail.com">
              giangster.nguyen@gmail.com
            </a>{" "}
            or contact me via this form if you have any questions.
          </p>
        </AppInfoContainer>

        <ContactInfoContainer>
          <TitleContainer>Contact</TitleContainer>
          <ContactFormContainer>
            <FormInput
              required
              type="text"
              name="firstname"
              label="First Name"
              value={this.state.firstname}
              onChange={this.onChange}
            />
            <FormInput
              type="text"
              name="lastname"
              label="Last Name"
              value={this.state.lastname}
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
            <textarea
              required
              name="message"
              placeholder="Write your message here"
              value={this.state.message}
              onChange={this.onChange}
            ></textarea>

            <CustomButton type="submit" value="Submit">
              Submit
            </CustomButton>
          </ContactFormContainer>
        </ContactInfoContainer>
      </ContactPageContainer>
    );
  }
}

export default ContactPage;
