import React from "react"
import "./cart-items.style.scss"


const CartItem = ({item : {name, quantity, imageUrl, price}} ) => {
    return (
<div className="cart-item">
<img src={imageUrl} alt="item" />
<div className="item-details">
    <span className='name'>{name}</span>
    <span className='price'> {quantity} x ${price}</span>
</div>
</div>

    )
}

export default CartItem

//: {name, imageUrl, price, quantity}