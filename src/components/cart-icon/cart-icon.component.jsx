import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/brand-icon/shopping-bag.svg";
import { toggleCart } from "../../redux/cart/cart-action";
import { connect } from "react-redux";
import {selectItemsCounter} from "../../redux/cart/cart-utils/items-selector"
//import itemsCounter from "../../redux/cart/cart-utils/items-counter";


const CartIcon = ({ toggleCart, cartItems }) => {

 
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCart} />
      <span className="item-count" onClick={toggleCart}>
         { cartItems ? cartItems : 0 }
      </span>
    </div>
  );
};



const mapStateToProps = (state) => ({
  cartItems: selectItemsCounter(state),
})

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
