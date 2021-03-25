import React from "react";
import CartItems from "../cart-items/cart-items.component";
import CustomButton from "../custom-button/button.component";
import {connect} from "react-redux"
import "./cart-dropdown.style.scss";

const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => <CartItems key={cartItem.id} item={cartItem} />)}
        </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};


const mapStateToProps = (state) => ({
  cartItems : state.cart.cartItems

})

export default connect(mapStateToProps)(CartDropdown);
