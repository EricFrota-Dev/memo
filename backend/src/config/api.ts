import axios from "axios";

export const dataBaseApi = axios.create({
  baseURL: "http://localhost:3333/",
});

export const dictionaryApi = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
});

export const translatorApi = axios.create({
  baseURL: "https://translate.terraprint.co",
});
