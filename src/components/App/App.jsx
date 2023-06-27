import { Header } from "../header/header";
import { CurrentWeather } from "../current-weather/Current-weather";
import { WeatherForecastForHour } from "../weather-forecast-hour/weather-forecast-hour";
import { WeatherForecastWeekly } from "../weather-forecast-weekly/weather-forecast-weekly";
import { ForecastSwitchButtons } from "../weather-forecast-buttons/weather-forecast-buttons";
import { useTheme } from "../../hooks/useTheme";
import { useTemperatureUnit } from "../../hooks/useTemperatureUnit";
import { useSwitchTodayAnaWeekly } from "../../hooks/useSwitchTodayAndWeekly";
import { useWeatherForecastData } from "../../hooks/useWeatherForecastData";
import { ThemeContextProvider } from "../../theme-context/ThemeContext";
import { isDarkTheme } from "../../utils";
import cx from "classnames";
import styles from "./App.module.scss";

function App() {
  const { theme, toggleTheme } = useTheme();
  const { temperatureUnit, toggleTemperature } = useTemperatureUnit();
  const { todayAndWeekly, toggleTodayAndWeekly } = useSwitchTodayAnaWeekly();
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
          <ForecastSwitchButtons
            todayAndWeekly={todayAndWeekly}
            toggleTodayAndWeekly={toggleTodayAndWeekly}
          />
          {todayAndWeekly === "today" ? (
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
}

export default App;
