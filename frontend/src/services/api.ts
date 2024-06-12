import axios from "axios";

export const dataBaseApi = axios.create({
  baseURL: "http://localhost:3333/",
});
