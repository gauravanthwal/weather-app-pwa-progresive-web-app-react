import axios from "axios";
const URL = "https://api.openweathermap.org/data/2.5/weather";
// const API_KEY = "RSOYR5YGnAajcUXvd8a2pKM1gg09d3GC";
const API_KEY = "f33a484cf794d08d0148764789aaba32";

export const fetchWeather = async (query) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        q: query,
        units: "metric",
        APPID: API_KEY,
      },
    });
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
