import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import booksReducer from "../features/booksSlice";
import adminReducer from "../features/adminSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    admin: adminReducer,
  },
});
