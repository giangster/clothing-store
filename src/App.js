import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInSignUpPage from "./pages/signin-signup/signin-signup.component";
import { auth } from "./firebase/firebase.utils.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }

  unsubscribe;
  componentDidMount() {
    auth.onAuthStateChanged(user => this.setState({ currentUser: user }));
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
