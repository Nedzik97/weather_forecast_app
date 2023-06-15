import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { ThemeContext } from "../App/App";
import { responsiveCarousel, getDate } from "../../utils";
import styles from "./weather-forecast-weekly.module.scss";
import cx from "classnames";

export const WeatherForecastWeekly = ({
  weatherForecastWeekly,
  temperatureUnit,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Carousel responsive={responsiveCarousel}>
      {weatherForecastWeekly.map((day, index) => {
        return (
          <li
            className={cx(styles.forecastWeeklyItems, {
              [styles.weeklyItemsDark]: theme.dark,
            })}
            key={index}
          >
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <h2
              className={cx({
                [styles.dateTextDark]: theme.dark,
              })}
            >
              {getDate(day.date)}
            </h2>
            <span
              className={cx({
                [styles.dayTempDark]: theme.dark,
              })}
            >
              {temperatureUnit.celsius
                ? `${day.day.avgtemp_c}º`
                : `${day.day.avgtemp_f}º`}
            </span>
          </li>
        );
      })}
    </Carousel>
  );
};
