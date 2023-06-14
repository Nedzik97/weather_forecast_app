import { useState } from "react";
import { fetchForecastWeather } from "../api";

export const UseForecastData = () => {
  const [weatherForecastData, setWeatherForecastData] = useState([]);

  const getForecastData = (location) => {
    fetchForecastWeather(location).then((res) => {
      setWeatherForecastData(
        res.forecast.forecastday[0].hour.concat(
          res.forecast.forecastday[1].hour
        )
      );
    });
  };

  return { weatherForecastData, getForecastData };
};
