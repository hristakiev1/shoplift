import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/brand-icon/logo.svg";
import {selectCurrentUser} from "../../redux/user/user-utils/user-selector"

import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import "./navbar.style.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectHidden} from "../../redux/cart/cart-utils/items-selector"

const Header = ({ currentUser, hidden }) => {

  return (
    <div className="header">
      <NavLink to="/" className="logo-container">
        <Logo className="logo" />
      </NavLink>
      <div className="options">
        <NavLink to="/shop" className="option">
          SHOP
        </NavLink>
        <NavLink to="/contact" className="option">
          CONTACT
        </NavLink>
        {currentUser ? (
          <div onClick={() => auth.signOut()} className="option">
            SIGN OUT
          </div>
        ) : (
          <NavLink to="/signIn" className="option">
            SIGN IN
          </NavLink>
        )}
        <CartIcon className="options" />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  // example how to descructure twice
  currentUser: selectCurrentUser(state),
  hidden:selectHidden(state),
});

export default connect(mapStateToProps)(Header);
