const CartReducer = (state = defaultCartState, action) => {
  switch (action.type) {
    case "ADD_TOCART":
      return {...state, cartItems: [...state.cartItems, action.item]}
    default:
      return state;

  }
}

export default CartReducer;

const defaultCartState = {
  cartItems: []
}
