
import { configureStore, combineReducers } from '@reduxjs/toolkit';


import productSlice from './slices/productSlice';


const reducer = combineReducers({
    productSlice, 
  
})

// it refers to const productSlice in slices

const store = configureStore({reducer}) ;

export default store;

