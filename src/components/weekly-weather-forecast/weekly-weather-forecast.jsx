import { useContext } from "react";
import { ThemeContext } from "../App/App";
import { getHour, getDayWeatherForecast } from "../../utils";
import cx from "classnames";
import styles from "./weekly-weather-forecast.module.scss";

export const WeeklyWeatherForecast = ({
  weatherForecastData,
  currentWeather,
  temperatureUnit,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <section className={styles.forecastWeeklyWrapper}>
      <div className={styles.forecastButtonWrapper}>
        <button className={styles.buttonToday} type="button"></button>
        <button className={styles.buttonWeekly} type="button"></button>
      </div>
      <div className={styles.forecastWeekContainer}>
        {getDayWeatherForecast(
          weatherForecastData,
          currentWeather.localTime
        ).map((hour, index) => {
          return (
            <li
              className={cx(styles.forecastForHour, {
                [styles.darkTheme]: theme.dark,
              })}
              key={index}
            >
              <img
                className={styles.forecastHourIcon}
                src={hour.condition.icon}
                alt={hour.condition.text}
              ></img>
              <p className={styles.forecastTime}>{getHour(hour.time)}</p>

              <span
                className={cx(styles.hourTemp, {
                  [styles.hourTempDark]: theme.dark,
                })}
              >
                {temperatureUnit.celsius
                  ? `${hour.temp_c}º`
                  : `${hour.temp_f}º`}
              </span>
              <div>
                <span
                  className={cx(styles.forecastWindSpeed, {
                    [styles.darkText]: theme.dark,
                  })}
                >
                  {`Wind speed ${hour.wind_kph}km/h`}
                </span>
                <span
                  className={cx(styles.forecastChanceRain, {
                    [styles.darkText]: theme.dark,
                  })}
                >
                  {`Chance of rain: ${hour.chance_of_rain}%`}
                </span>
              </div>
              <p
                className={cx(styles.forecastText, {
                  [styles.darkText]: theme.dark,
                })}
              >
                {hour.condition.text}
              </p>
            </li>
          );
        })}
      </div>
    </section>
  );
};
