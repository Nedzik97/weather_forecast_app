import React from "react";
import { CurrentWeather } from "../current-weather/Current-weather";
import { ChoiceLocation } from "../choice-location/choice-location";
import { WeeclyWeather } from "../weecly-weather/weecly-weather";
import { SetChoiceLocation } from "../../hooks/useChoiceLocation.jsx";
import { SetWeatherData } from "../../hooks/useWeatherData";
import cx from "classnames";
import styles from "./App.module.scss";

export const ThemeContext = React.createContext();

function App() {
  const {
    isClick,
    setIsClick,
    location,
    setLocation,
    temperatureUnit,
    setTemperatureUnit,
    theme,
    setTheme,
  } = SetChoiceLocation();
  const { getWeatherData, currentWeather, getForecastWeather, forecastHour } =
    SetWeatherData();

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={cx(styles.appWrapper, {
          [styles.darkTheme]: theme.dark,
        })}
      >
        <div className={styles.App}>
          <ChoiceLocation
            isClick={isClick}
            setIsClick={setIsClick}
            location={location}
            temperatureUnit={temperatureUnit}
            setTemperatureUnit={setTemperatureUnit}
            setTheme={setTheme}
            setLocation={setLocation}
            getWeatherData={getWeatherData}
            getForecastWeather={getForecastWeather}
            currentWeather={currentWeather}
          />
          <CurrentWeather
            currentWeather={currentWeather}
            temperatureUnit={temperatureUnit}
          />
          <WeeclyWeather
            forecastHour={forecastHour}
            currentWeather={currentWeather}
            temperatureUnit={temperatureUnit}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
