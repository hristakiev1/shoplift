import { CartActionType } from "./cart-type";
import { addItemToCart,removeItemFromCart, deleteItemFromCart } from "./cart-utils/cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionType.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

      case CartActionType.REMOVE_CART_ITEM: 
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }

      case CartActionType.DELETE_ITEM: 
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload)
      }

    default:
      return state;
  }
};

export default cartReducer;
