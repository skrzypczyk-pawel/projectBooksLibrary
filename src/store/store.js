import { applyMiddleware, createStore } from 'redux';

import { validateAuthorMiddleware } from '../middlewere/validateAuthorMiddleware';
import { rootReducer } from '../reducers/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(validateAuthorMiddleware),
  );

export default store;