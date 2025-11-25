import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/admin`;
   
// Get all books
const addBook = async (formData, token) => {
  const response = await axios.post(`${API_BASE_URL}`,formData,{
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data; // array of books
};

// Get book details by id
const removeBook = async (id, token) => {
  const response = await axios.delete(`${API_BASE_URL}/books/${id}`,{
        headers: { Authorization: `Bearer ${token}` },
      });
  return response.data; // single book object
};

export { addBook, removeBook };