import { fetchForecastWeather } from "../api";
import { useState, useEffect } from "react";

const defaultCity = "London";

export const useWeatherForecastData = () => {
  const [weatherData, setWeatherData] = useState({
    currentWeather: {},
    forecastForHour: [],
    forecastForWeekly: [],
  });

  const getWeatherData = (location) => {
    fetchForecastWeather(location).then((res) => {
      setWeatherData((prev) => ({
        ...prev,
        currentWeather: {
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
        },
        forecastForHour: res.forecast.forecastday[0].hour.concat(
          res.forecast.forecastday[1].hour
        ),
        forecastForWeekly: res.forecast.forecastday,
      }));
    });
  };

  useEffect(() => {
    getWeatherData(defaultCity);
  }, []);

  return { weatherData, getWeatherData };
};
