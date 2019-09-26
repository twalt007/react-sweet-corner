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

export const addItemToCart = (productID,quantity) => async dispatch => {
    try{
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }
        const resp = await axios.post(`${BASE_URL}/api/cart/items/${productID}`,{
            quantity: quantity
        },axiosConfig);
        localStorage.setItem('sc-cart-token', resp.data.cartToken);

        dispatch({
            type: types.ADD_ITEM_TO_CART,
            cartTotal: resp.data.total
        })
    }catch (error){
        console.log("Error adding item to cart", error)
    }
}
export const getActiveCart = () => async dispatch => {
    try{
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }
        const resp = await axios.get(`${BASE_URL}/api/cart`,axiosConfig)
        console.log("getative cart", resp)
        dispatch({
            type: types.GET_ACTIVE_CART,
            cart: resp.data
        })
    }catch (error){
        console.log("getActiveCart error: ", error)
    }
}
export const getCartTotals = () => async dispatch => {
    try{
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }
        const resp = await axios.get(`${BASE_URL}/api/cart/totals`,axiosConfig);
        console.log("response",resp)
        dispatch({
            type: types.GET_CART_TOTALS,
            total: resp.data.total
        })
    }catch (error){
        console.log("Error getting cart totals: ", error)
    }
}