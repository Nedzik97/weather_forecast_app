import { useEffect } from "react";
import { createContext } from "react";
import { Header } from "../header/header";
import { CurrentWeather } from "../current-weather/Current-weather";
import { WeeklyWeatherForecast } from "../weekly-weather-forecast/weekly-weather-forecast";
import { UsePageTheme } from "../../hooks/usePageTheme";
import { UseTemperatureUnit } from "../../hooks/useTemperatureUnit";
import { UseCurrentWeatherData } from "../../hooks/useCurrentWeatherData";
import { UseForecastData } from "../../hooks/useForecastData";
import cx from "classnames";
import styles from "./App.module.scss";
export const ThemeContext = createContext();

function App() {
  const { pageTheme, changePageTheme } = UsePageTheme();
  const { temperatureUnit, changeTemperatureUnit } = UseTemperatureUnit();
  const { currentWeather, getCurrentWeather } = UseCurrentWeatherData();
  const { weatherForecastData, getForecastData } = UseForecastData();

  useEffect(() => {
    getCurrentWeather("London");
    getForecastData("London");
  }, []);

  return (
    <div
      className={cx(styles.appWrapper, {
        [styles.darkTheme]: pageTheme.dark,
      })}
    >
      <div className={styles.App}>
        <ThemeContext.Provider value={pageTheme}>
          <Header
            getCurrentWeather={getCurrentWeather}
            getForecastData={getForecastData}
            changePageTheme={changePageTheme}
            changeTemperatureUnit={changeTemperatureUnit}
            temperatureUnit={temperatureUnit}
          />
          <CurrentWeather
            currentWeather={currentWeather}
            temperatureUnit={temperatureUnit}
          />

          <WeeklyWeatherForecast
            weatherForecastData={weatherForecastData}
            currentWeather={currentWeather}
            temperatureUnit={temperatureUnit}
          />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
