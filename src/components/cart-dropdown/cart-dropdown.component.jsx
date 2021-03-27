import React from "react";
import CartItem from "../cart-items/cart-items.component";
import CustomButton from "../custom-button/button.component";
import {connect} from "react-redux";
import "./cart-dropdown.style.scss";
import {selectCartItems, selectHidden} from "../../redux/cart/cart-utils/items-selector";
import {withRouter} from "react-router-dom"
import { toggleCart } from "../../redux/cart/cart-action";


const CartDropdown = ({cartItems, history,dispatch}) => {

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        
        {cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) : <span className="empty-message">Your cart is empty</span>}
       
        </div>
      <CustomButton onClick= {() => {history.push("/checkout"); dispatch(toggleCart()) }}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};


const mapStateToProps = (state) => ({
  cartItems : selectCartItems(state),
 

})

export default withRouter(connect(mapStateToProps)(CartDropdown));
