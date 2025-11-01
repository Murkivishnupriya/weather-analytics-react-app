import axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1";

export const getCurrentWeather = async (city) => {
  try {
    const res = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: import.meta.env.VITE_WEATHER_API_KEY,
        q: city,
      },
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching current weather:", err);
    return null;
  }
};

export const getForecast = async (city, days = 7) => {
  try {
    const res = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: import.meta.env.VITE_WEATHER_API_KEY,
        q: city,
        days,
      },
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching forecast:", err);
    return null;
  }
};
 
