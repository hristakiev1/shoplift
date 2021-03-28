import React from "react";
import {connect} from "react-redux";
import {deleteItem, addItem, removeItem} from "../../redux/cart/cart-action";


import "./checkout-item.style.scss"

 const CheckoutItem = ({cartItem , deleteItem, addItem,removeItem }) => {

const {imageUrl, name, quantity, price} = cartItem;
    return (

<div className="checkout-item">
   
<div className="image-container">

<img src={imageUrl} alt="item" />
</div>
<span className='name'>{name}</span>
<span className='quantity'>
<span className="change-quantity" onClick={()=> removeItem(cartItem)}>&#10096;</span>
{quantity}
<span className="change-quantity" onClick={()=> addItem(cartItem)}>&#10097;</span>
</span>
<span className='price'>{price}</span>
<div className='delete-button' onClick= {()=> deleteItem(cartItem)}>&#10006;</div>
      </div>
    )
}


const mapDispatchToProps = dispatch => ({
    deleteItem: (item) => dispatch(deleteItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})



export default connect(null,mapDispatchToProps )(CheckoutItem);