import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/books`;

// Get all books
export const fetchAllBooks = async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data; // array of books
};

// Get book details by id
export const fetchBookDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data; // single book object
};
