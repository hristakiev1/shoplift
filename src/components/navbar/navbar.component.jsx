import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/brand-icon/logo.svg";
import "./navbar.style.scss";

const Header = () => {
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
        <NavLink to="/signin" className="option">
          SIGN IN
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
