import { CurrentWeather } from "../current-weather/Current-weather";
import { ChoiceLocation } from "../choice-location/choice-location";
import { WeeclyWeather } from "../weecly-weather/weecly-weather";
import { SetChoiceLocation } from "../../hooks/useChoiceLocation.jsx";
import { SetWeatherData } from "../../hooks/useWeatherData";
import cx from "classnames";
import styles from "./App.module.scss";

function App() {
  const {
    isClick,
    setIsClick,
    location,
    setLocation,
    temperatureUnit,
    setTemperatureUnit,
    pageTheme,
    setPageTheme,
  } = SetChoiceLocation();
  const { getWeatherData, currentWeather, getForecastWeather, forecastHour } =
    SetWeatherData();
  return (
    <div
      className={cx(styles.appWrapper, {
        [styles.darkTheme]: pageTheme,
      })}
    >
      <div className={styles.App}>
        <ChoiceLocation
          isClick={isClick}
          setIsClick={setIsClick}
          location={location}
          temperatureUnit={temperatureUnit}
          setTemperatureUnit={setTemperatureUnit}
          pageTheme={pageTheme}
          setPageTheme={setPageTheme}
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
  );
}

export default App;
