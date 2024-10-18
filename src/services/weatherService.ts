import axios from "axios";

export const weatherService = axios.create(
  {
    baseURL: `https://api.open-meteo.com/v1`,
    headers: {
      'Content-Type': 'application/json', // Asegura que el contenido sea JSON
    },
  });