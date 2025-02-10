import axios from "axios";

// Set base URL for axios requests
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
