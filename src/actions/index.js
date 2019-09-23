import types from "./types" ;
import axios from "axios";

const BASE_URL = 'http://api.sc.lfzprototypes.com';

export const getAllProducts = () => async dispatch => {
    try{
        const resp = await axios.get(BASE_URL+'/api/products');
        
        dispatch({
            type: types.GET_ALL_PRODUCTS,
            products: resp.data.products
        })
    } catch(error){
        console.log("Error getting all products", error);
    }
}

export const getProductDetails = (productId) => async dispatch => {
    console.log("ProductID",productId);
    try{
        const resp = await axios.get(`${BASE_URL}/api/products/${productId
        }`);

        dispatch({
            type: types.GET_PRODUCT_DETAILS,
            product: resp.data
        })
    } catch(error){
        console.log("Error getting product detials", error);
    }
}

export const clearProductDetails = () => {
    return{
        type: types.CLEAR_PRODUCT_DETAILS,
    }
}