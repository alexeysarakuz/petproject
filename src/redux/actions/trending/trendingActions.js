export const getTrendingItems = () => {
  return{
    type: "GET_TRENDING"
  } 
}

export const addToCart = (item) => {
  return{
    type: "ADD_TOCART", item: item
  }
}
