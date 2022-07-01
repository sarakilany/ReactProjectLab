import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = 'https://fakestoreapi.com/products';

export const fetchProducts = createAsyncThunk('shop/fetchProducts', () => {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(json => json)
        .catch(err => console.log(err))
})

const initialState = {
    products: [],
    loading: false,
    error: {}
}


const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        addProduct: () => {

        }
    },
    extraReducers: {
        //api call actions
        [fetchProducts.pending]: (state) => {
            state.loading = true
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
            state.loading = false;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }

}
);

export const { addProduct } = shopSlice.actions;

export default shopSlice.reducer;