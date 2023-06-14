import { fetchForecastWeather } from "../api";
import { useState } from "react";

export const UseCurrentWeatherData = () => {
  const [currentWeather, setCurrentWeather] = useState({});

  const getCurrentWeather = (location) => {
    fetchForecastWeather(location).then((res) => {
      setCurrentWeather((prev) => ({
        ...prev,
        city: res.location.name,
        region: res.location.region,
        localTime: res.location.localtime,
        lastUpdate: res.current.last_updated,
        windKPH: res.current.wind_kph,
        windDir: res.current.wind_dir,
        cloud: res.current.cloud,
        tempC: res.current.temp_c,
        tempF: res.current.temp_f,
        text: res.current.condition.text,
        icon: res.current.condition.icon,
      }));
    });
  };

  return { currentWeather, getCurrentWeather };
};
