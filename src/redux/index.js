import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './features/todoSlice';
import shopSlice from './features/shopSlice';
// import { todoReducer } from './config';
export const store = configureStore({
    //reducer
    reducer: {
        todos: todoSlice.reducer,
        shopSlice,
    }
});