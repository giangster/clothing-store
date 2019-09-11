import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils.js";
import Cart from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import { toggleCartStatus } from "../../redux/cart/cart-action";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon toggleCartStatus={toggleCartStatus} />
      </div>
      {hidden ? <div></div> : <Cart />}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartStatus: () => dispatch(toggleCartStatus())
});

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cart: state.cart.hidden
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
