import cx from "classnames";
import { v4 as uuidv4 } from "uuid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { ThemeContext } from "../../theme-context/ThemeContext";
import {
  getHour,
  getDayWeatherForecast,
  isCelsiusTemperatureUnit,
  responsiveCarousel,
} from "../../utils";
import styles from "./weather-forecast-hour.module.scss";

export const WeatherForecastForHour = ({ weatherData, temperatureUnit }) => {
  const isDarkTheme = useContext(ThemeContext);

  return (
    <Carousel responsive={responsiveCarousel} swipeable={true}>
      {getDayWeatherForecast(
        weatherData.forecastForHour,
        weatherData.currentWeather.localTime
      ).map((hour) => {
        return (
          <li
            className={cx(styles.forecastForHour, {
              [styles.darkTheme]: isDarkTheme,
            })}
            key={uuidv4()}
          >
            <img
              className={styles.forecastHourIcon}
              src={hour.condition.icon}
              alt={hour.condition.text}
            ></img>
            <p className={styles.forecastTime}>{getHour(hour.time)}</p>
            <span
              className={cx(styles.hourTemp, {
                [styles.hourTempDark]: isDarkTheme,
              })}
            >
              {isCelsiusTemperatureUnit(temperatureUnit)
                ? `${hour.temp_c}º`
                : `${hour.temp_f}º`}
            </span>
            <div>
              <span
                className={cx(styles.forecastWindSpeed, {
                  [styles.darkText]: isDarkTheme,
                })}
              >
                {`Wind speed ${hour.wind_kph}km/h`}
              </span>
              <span
                className={cx(styles.forecastChanceRain, {
                  [styles.darkText]: isDarkTheme,
                })}
              >
                {`Chance of rain: ${hour.chance_of_rain}%`}
              </span>
            </div>
            <p
              className={cx(styles.forecastText, {
                [styles.darkText]: isDarkTheme,
              })}
            >
              {hour.condition.text}
            </p>
          </li>
        );
      })}
    </Carousel>
  );
};
