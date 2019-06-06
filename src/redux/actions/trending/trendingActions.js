export const getTrendingItems = () => ({
  type: 'GET_TRENDING',
});

export const addToCart = item => ({
  type: 'ADD_TOCART', item,
});
