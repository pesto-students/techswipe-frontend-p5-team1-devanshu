import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_API;

// const token = JSON.parse(localStorage.getItem("token"));
export const axiosClient = axios.create({
  baseURL: baseURL,
  // headers: { Authorization: `Bearer ${token}` },
});
