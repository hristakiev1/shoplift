import { CartActionType } from "./cart-type";

export const toggleCart = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionType.ADD_CART_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionType.REMOVE_CART_ITEM,
  payload: item
})

export const deleteItem = (item) => (
  {
    type: CartActionType.DELETE_ITEM,
    payload: item
  }
)
