import cx from "classnames";
import { Header } from "../header/header";
import { CurrentWeather } from "../current-weather/current-weather";
import { WeatherForecastForHour } from "../weather-forecast-hour/weather-forecast-hour";
import { WeatherForecastWeekly } from "../weather-forecast-weekly/weather-forecast-weekly";
import { TimePeriodButtons } from "../time-period-buttons/time-period-buttons";
import { useTheme } from "../../hooks/useTheme";
import { useTemperatureUnit } from "../../hooks/useTemperatureUnit";
import { useTimePeriod } from "../../hooks/useTimePeriod";
import { useWeatherForecastData } from "../../hooks/useWeatherForecastData";
import { ThemeContextProvider } from "../../theme-context/ThemeContext";
import { isDarkTheme, TIME_PERIOD } from "../../utils";
import styles from "./App.module.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { temperatureUnit, toggleTemperature } = useTemperatureUnit();
  const { timePeriod, toggleTimePeriod } = useTimePeriod();
  const { weatherData, getWeatherData } = useWeatherForecastData();

  return (
    <div
      className={cx(styles.appWrapper, {
        [styles.darkTheme]: isDarkTheme(theme),
      })}
    >
      <div className={styles.App}>
        <ThemeContextProvider theme={theme}>
          <Header
            getWeatherData={getWeatherData}
            toggleTheme={toggleTheme}
            toggleTemperature={toggleTemperature}
            temperatureUnit={temperatureUnit}
          />
          <CurrentWeather
            weatherData={weatherData}
            temperatureUnit={temperatureUnit}
          />
          <TimePeriodButtons
            timePeriod={timePeriod}
            toggleTimePeriod={toggleTimePeriod}
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
