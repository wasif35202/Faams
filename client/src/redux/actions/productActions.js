import {setProduct} from '../slices/productSlice';

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
