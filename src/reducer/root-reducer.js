import { combineReducers } from 'redux';
import CartReducer from './cart/cart.reducer';

import userReducer from './user/user-redux';

export default combineReducers({
    user: userReducer,
    cart: CartReducer
})