export const getItemInfo = identifier => ({
  type: 'LOAD_ITEM',
  id: identifier,
});

export const addToCart = (item, quantity) => ({
  type: 'ADD_TOCART-MULTIPLE', item, quantity,
});

export const sendItemReview = () => ({
  type: 'SEND_REVIEW',
});
