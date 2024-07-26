import { createSlice } from '@reduxjs/toolkit';


const initialState =  {

     productsList:[],
  
}

export const productSlice =  createSlice({
      name: 'products',
      initialState,
      reducers: {

         
            setProduct : (state,action) =>{
                
                state.productsList =action.payload;
             
           
            },  
             
      }
})

export const {setProduct} = productSlice.actions;


export default productSlice.reducer;


