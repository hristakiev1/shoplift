import React from "react"
import "./checkout.style.scss"
import {connect} from "react-redux"
import {selectCartItems, selectTotalPrice} from "../../redux/cart/cart-utils/items-selector"




const CheckoutPage = ({cartItems, totalPrice}) => {
    return (
        <div className="checkout-page">

           <div className='checkout-header'>
               <div className="header-block">                  
               <span className="checkout-product">Product</span>
               </div>
               <div className="header-block">                  
               <span className="header-title">Description</span>
               </div>
               <div className="header-block">                  
               <span className="header-title">Quantity</span>
               </div>
               <div className="header-block">                  
               <span className="header-title">Price</span>
               </div>
               <div className="header-block">                  
               <span className="header-title">Remove</span>
               </div>
           </div>
                   {cartItems.map(cartItem => cartItem.name) } 
                   <div className="total">
                       <span>Total: ${totalPrice}</span>
                       </div>   
        </div>
    )
}


const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    totalPrice: selectTotalPrice(state)
})

export default connect(mapStateToProps)(CheckoutPage);