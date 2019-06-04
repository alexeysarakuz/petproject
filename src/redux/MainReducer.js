import {combineReducers} from "redux"

import TrendingReducer from "./reducers/trendingReducer.js"
import CartReducer from "./reducers/cartReducer.js"

const mainReducer = combineReducers({trending: TrendingReducer, cart: CartReducer});
export default mainReducer
