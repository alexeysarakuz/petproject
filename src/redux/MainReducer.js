import {combineReducers} from "redux"

import TrendingReducer from "./reducers/trendingReducer.js"
import CartReducer from "./reducers/cartReducer.js"
import BlogReducer from "./reducers/blogReducer.js"

const mainReducer = combineReducers({trending: TrendingReducer, cart: CartReducer, blog: BlogReducer});
export default mainReducer
