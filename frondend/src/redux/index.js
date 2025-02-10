import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice"; // Correct import
import productReducer from "../redux/productSlice"; // Corrected import

export const store = configureStore({
  reducer: {
    user: userReducer,       // Correctly assigned
    product: productReducer, // Fixed the incorrect import
  },
});

