import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_API;

export const axiosClient = axios.create({
  baseURL: baseURL,
});
