import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { gql } from '@apollo/client';

// Define your initial state
const initialState = {
    categories: [],
    status: 'idle',
    error: null,
};

// Define your reducers
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        }
    }
});

// Define and export your reducer

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;