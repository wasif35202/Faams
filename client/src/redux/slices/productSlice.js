import { createSlice } from '@reduxjs/toolkit';


const initialState = {

      productsList: [],
      singleProduct: {},

}

export const productSlice = createSlice({
      name: 'products',
      initialState,
      reducers: {
            setProduct: (state, action) => {
                  state.productsList = action.payload;

            },
            setSingleProduct: (state, action) => {
                  state.singleProduct = action.payload;

            },

      }
})

export const { setProduct, setSingleProduct } = productSlice.actions;


export default productSlice.reducer;


