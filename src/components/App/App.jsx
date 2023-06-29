import cx from "classnames";
import { useState } from "react";
import { Header } from "../header/header";
import { CurrentWeather } from "../current-weather/current-weather";
import { WeatherForecastForHour } from "../weather-forecast-hour/weather-forecast-hour";
import { WeatherForecastWeekly } from "../weather-forecast-weekly/weather-forecast-weekly";
import { TimePeriodButtons } from "../time-period-buttons/time-period-buttons";
import { useTheme } from "../../hooks/useTheme";
import { useTemperatureUnit } from "../../hooks/useTemperatureUnit";
import { useWeatherForecastData } from "../../hooks/useWeatherForecastData";
import { ThemeContextProvider } from "../../theme-context/ThemeContext";
import { TIME_PERIOD } from "../../utils";
import styles from "./App.module.scss";

const App = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { temperatureUnit, toggleTemperatureUnit } = useTemperatureUnit();
  const { weatherData, getWeatherData } = useWeatherForecastData();
  const [timePeriod, setTimePeriod] = useState(TIME_PERIOD.today);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div
      className={cx(styles.appWrapper, {
        [styles.darkTheme]: isDarkTheme,
      })}
    >
      <div className={styles.App}>
        <ThemeContextProvider isDarkTheme={isDarkTheme}>
          <Header
            getWeatherData={getWeatherData}
            toggleTheme={toggleTheme}
            toggleTemperatureUnit={toggleTemperatureUnit}
            temperatureUnit={temperatureUnit}
            formSubmitted={formSubmitted}
            setFormSubmitted={setFormSubmitted}
          />
          {weatherData && (
            <CurrentWeather
              weatherData={weatherData}
              temperatureUnit={temperatureUnit}
            />
          )}
          <TimePeriodButtons
            timePeriod={timePeriod}
            setTimePeriod={setTimePeriod}
          />
          {timePeriod === TIME_PERIOD.today ? (
            <WeatherForecastForHour
              weatherData={weatherData}
              temperatureUnit={temperatureUnit}
            />
          ) : (
            <WeatherForecastWeekly
              weatherData={weatherData}
              temperatureUnit={temperatureUnit}
            />
          )}
        </ThemeContextProvider>
      </div>
    </div>
  );
};

export default App;
