import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllBooks, fetchBookDetails } from "../api/booksApi";

export const getAllBooks = createAsyncThunk(
  "books/getAllBooks",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAllBooks();
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const getBookDetails = createAsyncThunk(
  "books/getBookDetails",
  async (id, { rejectWithValue }) => {
    try {
      const data = await fetchBookDetails(id);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    allBooks: [],
    selectedBook: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get all books
      .addCase(getAllBooks.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.allBooks = action.payload;
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get book details
      .addCase(getBookDetails.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(getBookDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBook = action.payload;
      })
      .addCase(getBookDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;
