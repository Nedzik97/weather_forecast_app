import { Scrollable } from "../Scrollable/Scrollable";
import styles from "./weecly-weather.module.scss";
import { getHour, getDayWeatherForecast } from "../../utils";

export const WeeclyWeather = ({
  forecastHour,
  currentWeather,
  temperatureUnit,
}) => {
  return (
    <section className={styles.forecastWeeklyWrapper}>
      <div className={styles.forecastButtonWrapper}>
        <button className={styles.buttonToday} type="button"></button>
        <button className={styles.buttonWeekly} type="button"></button>
      </div>
      <div className={styles.forecastWeekContainer}>
        <Scrollable _class={styles.forecastForHour}>
          {getDayWeatherForecast(forecastHour, currentWeather.localTime).map(
            (hour, index) => {
              return (
                <li className={styles.item} key={index}>
                  <img
                    className={styles.forecastHourIcon}
                    src={hour.condition.icon}
                    alt={hour.condition.text}
                  ></img>
                  <p className={styles.forecastTime}>{getHour(hour.time)}</p>

                  <span className={styles.hourTemp}>
                    {!temperatureUnit ? hour.temp_c : hour.temp_f}
                  </span>
                  {!temperatureUnit ? <sub> ºC </sub> : <sub> ºF </sub>}
                  <div>
                    <span className={styles.forecastWindSpeed}>
                      {`Wind speed ${hour.wind_kph}km/h`}
                    </span>
                    <span className={styles.forecastChanceRain}>
                      {`Chance of rain: ${hour.chance_of_rain}%`}
                    </span>
                  </div>
                  <p className={styles.forecastText}>{hour.condition.text}</p>
                </li>
              );
            }
          )}
        </Scrollable>
      </div>
    </section>
  );
};
