import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addBook,removeBook } from "../api/adminApi";


// --- Async Thunks ---

// Add a book
export const addBook = createAsyncThunk(
  "admin/addBook",
  async ({ bookData, token }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      Object.keys(bookData).forEach((key) => formData.append(key, bookData[key]));

      const res = await addBook(formData, token);

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Remove a book
export const removeBook = createAsyncThunk(
  "admin/removeBook",
  async ({ bookId, token }, { rejectWithValue }) => {
    try {
      await removeBook(bookId, token);
      return bookId;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// --- Slice ---

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    books: [],
    loading: false,
    error: null,
    success: false,
    deletedBookId: null,
  },
  reducers: {
    resetAdminState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.deletedBookId = null;
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Add book
      .addCase(addBook.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books.unshift(action.payload); // add to books array
        state.success = true;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      // Remove book
      .addCase(removeBook.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.loading = false;
        state.deletedBookId = action.payload;
        state.books = state.books.filter((b) => b._id !== action.payload);
        state.success = true;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetAdminState, setBooks } = adminSlice.actions;
export default adminSlice.reducer;
