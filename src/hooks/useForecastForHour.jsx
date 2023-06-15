import { useState } from "react";
import { fetchForecastWeather } from "../api";

export const UseForecastForHour = () => {
  const [weatherForecastData, setWeatherForecastData] = useState([]);

  const getForecastForHour = (location) => {
    fetchForecastWeather(location).then((res) => {
      setWeatherForecastData(
        res.forecast.forecastday[0].hour.concat(
          res.forecast.forecastday[1].hour
        )
      );
    });
  };

  return { weatherForecastData, getForecastForHour };
};
