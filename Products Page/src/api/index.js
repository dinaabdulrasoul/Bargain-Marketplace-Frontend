import axios from "axios";
// requests to backend
const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/auth/login", formData);
export const signUp = (formData) => API.post("/auth/register", formData);
export const addItem = (data) => API.post("/items", data);
export const getAllItems = () => API.get("/items");
export const getAllUsers = () => API.get("/users");
export const getAllItemsByUsers = (id) => API.get(`/items/user/${id}`);
