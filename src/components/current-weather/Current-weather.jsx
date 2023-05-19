import styles from "./Current-weather.module.scss";
import { getDate, getTime } from "../../utils";

export const CurrentWeather = ({ currentWeather, temperatureUnit }) => {
  if (!currentWeather) {
    return null;
  }
  return (
    <section className={styles.currentWeatherWrapper}>
      <div className={styles.dateWindWrapper}>
        <div className={styles.locationWrapper}>
          <h2 className={styles.cityNames}>{currentWeather.city}</h2>
          <p className={styles.regionNames}>{currentWeather.region}</p>
          <span className={styles.localTime}>
            {getDate(currentWeather.localTime)}
          </span>
          <span className={styles.lastUpdateTime}>
            {`Update As Of ${getTime(currentWeather.lastUpdate)}`}
          </span>
        </div>
        <div className={styles.windIndicators}>
          <div>
            <div className={styles.windIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35">
                <path
                  fill="#ffffff"
                  fill-rule="evenodd"
                  d="M.004 11.797 0 11.788l.004.009zm41.98 6.983-1.258-2.44C23.979 21.885 17.399 3.205.004 11.797l1.25 2.422c17.069-7.589 21.053 11.75 40.73 4.561zm-.001 6.041.017.033-.017-.033zM.004 17.842l1.25 2.42c17.069-7.586 21.053 11.749 40.729 4.559l-1.257-2.434C23.979 27.928 17.399 9.248.004 17.842zm0 6.043 1.25 2.422c17.069-7.588 21.053 11.75 40.73 4.561l-1.258-2.436C23.979 33.973 17.399 15.293.004 23.885z"
                />
              </svg>
            </div>
            <p
              className={styles.windSpeed}
            >{`Wind ${currentWeather.windKPH} km/h`}</p>
          </div>
          <div>
            <div className={styles.windIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                space="preserve"
                viewBox="0 0 35 35"
                fill="#ffffff"
              >
                <circle cx="16" cy="13" r="2" />
                <path
                  fill="#ffffff"
                  d="M17.88 10.661C17.585 7.532 16.792 0 16 0s-1.585 7.532-1.88 10.661C14.635 10.248 15.288 10 16 10s1.365.248 1.88.661zM18.968 12.56a3 3 0 1 1-5.935-.001c-2.556 1.815-8.702 6.279-8.306 6.966.395.687 7.304-2.387 10.166-3.699L14 31s.5 1 2 1 2-1 2-1l-.893-15.173c2.863 1.312 9.771 4.386 10.166 3.7.397-.688-5.75-5.153-8.305-6.967z"
                />
              </svg>
            </div>
            <p
              className={styles.windDir}
            >{`Wind dir ${currentWeather.windDir}`}</p>
          </div>
        </div>
      </div>
      <div className={styles.tempWrapper}>
        <span className={styles.currentDay}>Today</span>
        <img
          className={styles.icon}
          src={currentWeather.icon}
          alt="icon weather"
        ></img>
        <p className={styles.temp}>
          {!temperatureUnit ? currentWeather.tempC : currentWeather.tempF}
          {!temperatureUnit ? <sub>ºC</sub> : <sub>ºF</sub>}
        </p>
        <span className={styles.text}>{currentWeather.text}</span>
        <span className={styles.cloud}>{`Cloud ${currentWeather.cloud}%`}</span>
      </div>
    </section>
  );
};
