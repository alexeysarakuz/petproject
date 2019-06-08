export const getItemInfo = identifier => ({
  type: 'LOAD_ITEM',
  id: identifier,
});

export const sendItemReview = () => ({
  type: 'SEND_REVIEW',
});
