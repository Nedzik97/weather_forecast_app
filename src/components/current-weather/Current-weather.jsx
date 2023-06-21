import { getDate, getTime } from "../../utils";
import windDir from "../../images/icons/wind-direction.svg";
import windSpeed from "../../images/icons/wind-speed.svg";
import styles from "./Current-weather.module.scss";

export const CurrentWeather = ({ weatherData, temperatureUnit }) => {
  if (!weatherData) {
    return null;
  }

  return (
    <section className={styles.currentWeatherWrapper}>
      <div className={styles.dateWindWrapper}>
        <div className={styles.locationWrapper}>
          <h2 className={styles.cityNames}>
            {weatherData.currentWeather.city}
          </h2>
          <p className={styles.regionNames}>
            {weatherData.currentWeather.region}
          </p>
          <span className={styles.localTime}>
            {getDate(weatherData.currentWeather.localTime)}
          </span>
          <span className={styles.lastUpdateTime}>
            {`Update As Of ${getTime(weatherData.currentWeather.lastUpdate)}`}
          </span>
        </div>
        <div className={styles.windIndicators}>
          <div>
            <img
              className={styles.windIcon}
              src={windSpeed}
              alt="wind speed"
            ></img>
            <p
              className={styles.windSpeed}
            >{`Wind ${weatherData.currentWeather.windKPH} km/h`}</p>
          </div>
          <div>
            <img
              className={styles.windIcon}
              src={windDir}
              alt="wind icon"
            ></img>
            <p
              className={styles.windDir}
            >{`Wind dir ${weatherData.currentWeather.windDir}`}</p>
          </div>
        </div>
      </div>
      <div className={styles.tempWrapper}>
        <span className={styles.currentDay}>Today</span>
        <img
          className={styles.icon}
          src={weatherData.currentWeather.icon}
          alt="icon weather"
        ></img>
        <p className={styles.temp}>
          {temperatureUnit === "celsius"
            ? weatherData.currentWeather.tempC
            : weatherData.currentWeather.tempF}
          {temperatureUnit === "celsius" ? <sub>ºC</sub> : <sub>ºF</sub>}
        </p>
        <span className={styles.text}>{weatherData.currentWeather.text}</span>
        <span
          className={styles.cloud}
        >{`Cloud ${weatherData.currentWeather.cloud}%`}</span>
      </div>
    </section>
  );
};
