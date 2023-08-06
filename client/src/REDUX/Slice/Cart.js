import { createSlice  } from '@reduxjs/toolkit';

// Define your initial state
const initialState = {
    cart: [],
    status: 'idle',
    error: null,
};

// Define your reducers
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        updateCartQuantity: (state, action) => {
            state.cart = state.cart.map((product) => {
                if (action.payload._id === product._id) {
                    product.purchaseQuantity = action.payload.purchaseQuantity;
                }
                return product;
            });
        },
    },
});

export const { setCart,addToCart,updateCartQuantity } = cartSlice.actions;

export default cartSlice.reducer;