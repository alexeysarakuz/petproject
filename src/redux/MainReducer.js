import { combineReducers } from 'redux';

import TrendingReducer from './reducers/trendingReducer';
import CartReducer from './reducers/cartReducer';
import BlogReducer from './reducers/blogReducer';

const mainReducer = combineReducers({ TrendingReducer, CartReducer, BlogReducer });
export default mainReducer;
