import {setProduct,setSingleProduct} from '../slices/productSlice';

import axios from "axios";

export const fetchAllProducts = () => async (dispatch) => {

    try {

        const {data} = await axios.get('http://localhost:8080/products/');

        const { products } = data ;
        dispatch(setProduct(products))
              

        
    } 
        catch (error) {
            console.log(error.message)
    }

};



export const fetchProduct = (id) => async (dispatch) => {

    try {

        const { data } = await axios.get(`http://localhost:8080/products/${id}`)

      
        dispatch(setSingleProduct(data))
        console.log("first",data)
        

        
    } 
        catch (error) {
            console.log(error.message)
    }

};
