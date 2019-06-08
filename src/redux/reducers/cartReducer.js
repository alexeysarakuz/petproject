const defaultCartState = {
  cartItems: [],
};

const CartReducer = (state = defaultCartState, action) => {
  switch (action.type) {
    case 'ADD_TOCART': {
      const addedItem = state.cartItems.find(item => item.id === action.item.id);
      if (addedItem) {
        addedItem.quantity += 1;
        return { ...state };
      }
      // we haven't an item with the same id
      // so we can't stack it with an item of the same type
      const newItem = action.item;
      newItem.quantity = 1;
      return { ...state, cartItems: [...state.cartItems, newItem] };
    }
    default:
      return state;
  }
};
export default CartReducer;
