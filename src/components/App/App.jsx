import { useEffect } from "react";
import { createContext } from "react";
import { Header } from "../header/header";
import { WeatherForecastForHour } from "../weather-forecast-hour/weather-forecast-hour";
import { CurrentWeather } from "../current-weather/Current-weather";
import { ForecastSwitchButtons } from "../weather-forecast-buttons/weather-forecast-buttons";
import { WeatherForecastWeekly } from "../weather-forecast-weekly/weather-forecast-weekly";
import { UsePageTheme } from "../../hooks/usePageTheme";
import { UseTemperatureUnit } from "../../hooks/useTemperatureUnit";
import { UseCurrentWeatherData } from "../../hooks/useCurrentWeatherData";
import { UseForecastForHour } from "../../hooks/useForecastForHour";
import { UseSwitchButtons } from "../../hooks/useSwitchTodayAndWeekly";
import { UseForecastForWeekly } from "../../hooks/useForecastForWeekly";
import cx from "classnames";
import styles from "./App.module.scss";
export const ThemeContext = createContext();

function App() {
  const { pageTheme, changePageTheme } = UsePageTheme();
  const { temperatureUnit, changeTemperatureUnit } = UseTemperatureUnit();
  const { currentWeather, getCurrentWeather } = UseCurrentWeatherData();
  const { weatherForecastData, getForecastForHour } = UseForecastForHour();
  const { switchTodayAndWeekle, setSwitchTodayAndWeekle } = UseSwitchButtons();
  const { weatherForecastWeekly, getForecastWeekly } = UseForecastForWeekly();

  useEffect(() => {
    getCurrentWeather("London");
    getForecastForHour("London");
    getForecastWeekly("London");
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
            getForecastForHour={getForecastForHour}
            getForecastWeekly={getForecastWeekly}
            changePageTheme={changePageTheme}
            changeTemperatureUnit={changeTemperatureUnit}
            temperatureUnit={temperatureUnit}
          />
          <CurrentWeather
            currentWeather={currentWeather}
            temperatureUnit={temperatureUnit}
          />
          <ForecastSwitchButtons
            switchTodayAndWeekle={switchTodayAndWeekle}
            setSwitchTodayAndWeekle={setSwitchTodayAndWeekle}
          />
          {switchTodayAndWeekle.today ? (
            <WeatherForecastForHour
              weatherForecastData={weatherForecastData}
              currentWeather={currentWeather}
              temperatureUnit={temperatureUnit}
            />
          ) : (
            <WeatherForecastWeekly
              weatherForecastWeekly={weatherForecastWeekly}
              temperatureUnit={temperatureUnit}
            />
          )}
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
