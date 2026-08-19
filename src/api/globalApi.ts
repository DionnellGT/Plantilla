import axios from "axios";


export const globalApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "https://globalapi.elavellano.cl/api",
});
