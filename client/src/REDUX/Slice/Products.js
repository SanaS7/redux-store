import { createSlice  } from '@reduxjs/toolkit';

// Define your initial state
const initialState = {
    products: [],
    status: 'idle',
    error: null,
};

// Define your reducers
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;