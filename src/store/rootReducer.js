import { combineReducers } from 'redux';

import productsReducer from './modules/products/reducers';

export default combineReducers({
  products: productsReducer,
});
