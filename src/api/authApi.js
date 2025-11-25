import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/auth`;

 const loginUser = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
  return response.data; // { token, user }
};

 const registerUser = async (fullName, email, password) => {
  const response = await axios.post(`${API_BASE_URL}/register`, { fullName, email, password });
  return response.data;
};

export { loginUser, registerUser };