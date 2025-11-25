import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/admin`;

// Get all books
export const addBook = async () => {
  const response = await axios.post(`${API_BASE_URL}`);
  return response.data; // array of books
};

// Get book details by id
export const removeBook = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/books/${id}`);
  return response.data; // single book object
};
