import axios from "axios";

const api = axios.create({
  baseURL: "https://vila-api.herokuapp.com",
});

export default api;
