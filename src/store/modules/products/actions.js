import axios from 'axios';
import { API_URL } from '../../../config/constants';

export const GET_PRODUCTS = '@PRODUCTS/GET_PRODUCTS';
export const GET_PRODUCTS_REQUEST = '@PRODUCT/GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = '@PRODUCT/GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = '@PRODUCT/GET_PRODUCTS_ERROR';

export const getProducts = () => ({ type: GET_PRODUCTS });

export const getProductsRequest = () => ({ type: GET_PRODUCTS_REQUEST });

export const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  products,
});

export const getProductsError = (error) => ({
  type: GET_PRODUCTS_ERROR,
  error,
});

export const fetchProducts = () => async (dispatch) => {
  dispatch(getProductsRequest());
  setTimeout(async () => {
    try {
      const { data, status } = await axios.get(`${API_URL}/products`);

      if (status > 400) {
        return dispatch(getProductsError('Something wrong...'));
      }

      dispatch(getProductsSuccess(data));
    } catch (error) {
      dispatch(getProductsError(error));
    }
  }, 2000);
};
