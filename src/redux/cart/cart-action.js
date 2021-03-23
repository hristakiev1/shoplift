import { CartActionType } from "./cart-type";

const toggleCart = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN,
});

export default toggleCart;
