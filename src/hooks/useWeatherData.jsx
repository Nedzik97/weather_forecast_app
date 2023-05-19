import { useState } from "react";
const baseUrl = "http://api.weatherapi.com/v1";
const accountKey = `8b2fa3b1e1ca45aeb7e83803231505`;

export const SetWeatherData = () => {
  const [currentWeather, setCurrentWeather] = useState({
    city: "",
    region: "",
    localTime: "",
    lastUpdate: "",
    windKPH: "",
    windDir: "",
    cloud: "",
    tempC: "",
    tempF: "",
    text: "",
    icon: "",
  });

  const [forecastHour, setForecastHour] = useState([]);

  const getForecastWeather = (location) => {
    fetch(
      `${baseUrl}/forecast.json?key=${accountKey}&q=${location}&aqi=no&days=7`
    ).then((res) =>
      res.json().then((res) => {
        setForecastHour(
          res.forecast.forecastday[0].hour.concat(
            res.forecast.forecastday[1].hour
          )
        );
        setCurrentWeather({
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
        });
      })
    );
  };
  return { currentWeather, getForecastWeather, forecastHour };
};
