import initialState from '../../initialState';
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from './actions';

const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: action.products,
        isFetching: false,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default productsReducer;
