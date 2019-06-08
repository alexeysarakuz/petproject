const defaultCartState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartReducer = (state = defaultCartState, action) => {
  switch (action.type) {
    case 'ADD_TOCART': {
      let { totalPrice, totalQuantity } = state;
      totalPrice += action.item.price;
      totalQuantity += 1;

      const addedItem = state.cartItems.find(item => item.id === action.item.id);
      if (addedItem) {
        addedItem.quantity += 1;
        return { ...state, totalPrice, totalQuantity };
      }

      const newItem = action.item;
      newItem.quantity = 1;
      return {
        ...state, cartItems: [...state.cartItems, newItem], totalPrice, totalQuantity,
      };
    }
    default:
      return state;
  }
};
export default CartReducer;
