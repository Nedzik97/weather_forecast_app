import { useState } from "react";
import { fetchForecastWeather } from "../api";

export const UseForecastForWeekly = () => {
  const [weatherForecastWeekly, setWeatherForecastWeekly] = useState([]);

  const getForecastWeekly = (location) => {
    fetchForecastWeather(location).then((res) => {
      setWeatherForecastWeekly(res.forecast.forecastday);
      console.log(res.forecast.forecastday);
    });
  };

  return { weatherForecastWeekly, getForecastWeekly };
};
