import React from "react";
import CartItem from "../cart-items/cart-items.component";
import CustomButton from "../custom-button/button.component";
import {connect} from "react-redux"
import "./cart-dropdown.style.scss";
import {selectCartItems} from "../../redux/cart/cart-utils/items-selector"

const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        
        {cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) : <span className="empty-message">Empty cart</span>}
        {console.log(cartItems.length)}
        </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};


const mapStateToProps = (state) => ({
  cartItems : selectCartItems(state)

})

export default connect(mapStateToProps)(CartDropdown);
