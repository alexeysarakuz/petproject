import { combineReducers } from 'redux';

import TrendingReducer from './reducers/trendingReducer';
import CartReducer from './reducers/cartReducer';
import BlogReducer from './reducers/blogReducer';
import ItemInfoReducer from './reducers/itemInfoReducer';

const mainReducer = combineReducers({
  TrendingReducer, CartReducer, BlogReducer, ItemInfoReducer,
});
export default mainReducer;
