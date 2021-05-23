import { combineReducers } from 'redux';

import { rateReducer } from './rateReducer.js';
import { userReducer } from './userReducer.js';

export const rootReducer = combineReducers({
  rates: rateReducer,
  users: userReducer,
});