import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { UseLocation } from "../../hooks/useLocation";
import { LocationSearchForm } from "../location-search-form/location-search-form";
import { LocationSearchButton } from "../location-search-button/location-search-button";
import logo from "../../images/logo.jpg";
import celsius from "../../images/icons/celsius.svg";
import fahrenheit from "../../images/icons/fahrenheit.svg";
import lightIcon from "../../images/icons/light-theme.svg";
import darkIcon from "../../images/icons/dark-theme.svg";
import cx from "classnames";
import styles from "./header.module.scss";

export const Header = ({
  getWeatherData,
  toggleTheme,
  toggleTemperature,
  temperatureUnit,
}) => {
  const theme = useContext(ThemeContext);
  const { isClickLocation, setIsClickLocation } = UseLocation();

  const TemperatureUnit = ({ toggleTemperature }) => {
    return (
      <button
        onClick={() => toggleTemperature()}
        className={styles.degreeSwitch}
        type="button"
      >
        {temperatureUnit === "fahrenheit" ? (
          <img src={celsius} alt="celsius" />
        ) : (
          <img src={fahrenheit} alt="fahrenheit" />
        )}
      </button>
    );
  };

  const Theme = ({ toggleTheme }) => {
    return (
      <button
        onClick={() => toggleTheme()}
        className={styles.themeSwitch}
        type="burron"
      >
        {theme === "light" ? (
          <img src={lightIcon} alt="light icon" />
        ) : (
          <img src={darkIcon} alt="dark icon" />
        )}
      </button>
    );
  };

  return (
    <div
      className={cx(styles.containerChoiceLocation, {
        [styles.darkTheme]: theme === "dark",
      })}
    >
      <a href="/">
        <img src={logo} alt="logo" width="100" height="100"></img>
      </a>
      <h1
        className={cx({
          [styles.darkTheme]: theme === "dark",
        })}
      >
        Weather forecast
      </h1>
      <div className={styles.buttonContainer}>
        <div className={styles.switchContainer}>
          <TemperatureUnit toggleTemperature={toggleTemperature} />
          <Theme toggleTheme={toggleTheme} />
        </div>
        {isClickLocation ? (
          <LocationSearchForm
            getWeatherData={getWeatherData}
            setIsClickLocation={setIsClickLocation}
          />
        ) : (
          <LocationSearchButton setIsClickLocation={setIsClickLocation} />
        )}
      </div>
    </div>
  );
};
