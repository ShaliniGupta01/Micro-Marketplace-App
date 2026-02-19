import axios from "axios";

const instance = axios.create({
  baseURL: "https://micro-marketplace-appbackend.onrender.com",
});

export default instance;
