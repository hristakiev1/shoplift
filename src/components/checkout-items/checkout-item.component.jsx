import React from "react"

import "./checkout-item.style.scss"


export const CheckoutItem = ({cartItem :{imageUrl, name, quantity, price}}) => {
    return (

<div className="checkout-item">
   
<div className="image-container">

<img src={imageUrl} alt="item" />
</div>
<span className='name'>{name}</span>
<span className='quantity'>
<span className="change-quantity">&#10096;</span>
{quantity}
<span className="change-quantity">&#10097;</span>
</span>
<span className='price'>{price}</span>
<span className='remove-button'>&#10006;</span>
      </div>
    )
}

