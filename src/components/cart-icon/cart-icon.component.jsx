import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/brand-icon/shopping-bag.svg";
import { toggleCart } from "../../redux/cart/cart-action";
import { connect } from "react-redux";

const CartIcon = ({ toggleCart }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCart} />
      <span className="item-count" onClick={toggleCart}>
        0
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
