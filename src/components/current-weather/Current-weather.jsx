import { getDate, getTime } from "../../utils";
import windDir from "../../images/icons/wind-direction.svg";
import windSpeed from "../../images/icons/wind-speed.svg";
import { isCelsiusTemperatureUnit } from "../../utils";
import styles from "./current-weather.module.scss";

export const CurrentWeather = ({ weatherData, temperatureUnit }) => {
  return (
    weatherData && (
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
              >{`Wind speed ${weatherData.currentWeather.windKPH} km/h`}</p>
            </div>
            <div>
              <img
                className={styles.windIcon}
                src={windDir}
                alt="wind icon"
              ></img>
              <p
                className={styles.windDir}
              >{`Direction wind ${weatherData.currentWeather.windDir}`}</p>
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
            {isCelsiusTemperatureUnit(temperatureUnit)
              ? `${weatherData.currentWeather.tempC} ºC`
              : `${weatherData.currentWeather.tempF} ºF`}
          </p>
          <span className={styles.text}>{weatherData.currentWeather.text}</span>
          <span
            className={styles.cloud}
          >{`Cloud ${weatherData.currentWeather.cloud}%`}</span>
        </div>
      </section>
    )
  );
};
