import {createSelector} from "reselect"


const selectCart = state => state.cart

export const selectHidden = createSelector(
    [selectCart],

 cart => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectItemsCounter = createSelector(
    [selectCartItems],
itemsCount => itemsCount.reduce((acc, currentNum) =>  {return acc + currentNum.quantity}, 0)
)



