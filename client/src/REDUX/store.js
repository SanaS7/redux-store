import { configureStore } from '@reduxjs/toolkit'
// import userReducres from './Slice/Users'
import productReducer from './Slice/Products'
import cartReducer from './Slice/Cart.js'
import categoryReducer from './Slice/Category.js'
// import currentCategoryReducer from './Slice/CurrentCategory.js'


export const store = configureStore({
  reducer: {
    // user: userReducres,
    products: productReducer,
    cart: cartReducer,
    categories: categoryReducer,
    // currentCategory: currentCategoryReducer,
  },
})