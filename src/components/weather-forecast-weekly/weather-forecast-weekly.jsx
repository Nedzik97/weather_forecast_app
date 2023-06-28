import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cx from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../theme-context/ThemeContext";
import {
  responsiveCarousel,
  getDate,
  isDarkTheme,
  isCelsiusTemperatureUnit,
} from "../../utils";
import styles from "./weather-forecast-weekly.module.scss";

export const WeatherForecastWeekly = ({ weatherData, temperatureUnit }) => {
  const theme = useContext(ThemeContext);

  return (
    <Carousel responsive={responsiveCarousel}>
      {weatherData.forecastForWeekly.map((day, index) => {
        return (
          <li
            className={cx(styles.forecastWeeklyItems, {
              [styles.weeklyItemsDark]: isDarkTheme(theme),
            })}
            key={index}
          >
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <h2
              className={cx({
                [styles.dateTextDark]: isDarkTheme(theme),
              })}
            >
              {getDate(day.date)}
            </h2>
            <span
              className={cx({
                [styles.dayTempDark]: isDarkTheme(theme),
              })}
            >
              {isCelsiusTemperatureUnit(temperatureUnit)
                ? `${day.day.avgtemp_c}º`
                : `${day.day.avgtemp_f}º`}
            </span>
          </li>
        );
      })}
    </Carousel>
  );
};
