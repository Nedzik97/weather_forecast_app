import { useContext } from "react";
import { ThemeContext } from "../../theme-context/ThemeContext";
import { useLocation } from "../../hooks/useLocation";
import { LocationSearchForm } from "../location-search-form/location-search-form";
import { LocationSearchButton } from "../location-search-button/location-search-button";
import logo from "../../images/logo.jpg";
import celsius from "../../images/icons/celsius.svg";
import fahrenheit from "../../images/icons/fahrenheit.svg";
import lightIcon from "../../images/icons/light-theme.svg";
import darkIcon from "../../images/icons/dark-theme.svg";
import { isDarkTheme, isTemperatureUnit } from "../../utils";
import cx from "classnames";
import styles from "./header.module.scss";

export const Header = ({
  getWeatherData,
  toggleTheme,
  toggleTemperature,
  temperatureUnit,
}) => {
  const theme = useContext(ThemeContext);
  const { formSubmitted, setFormSubmitted } = useLocation();

  const TemperatureUnit = ({ toggleTemperature }) => {
    return (
      <button
        onClick={() => toggleTemperature()}
        className={styles.degreeSwitch}
        type="button"
      >
        {isTemperatureUnit(temperatureUnit) ? (
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
        {isDarkTheme(theme) ? (
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
        [styles.darkTheme]: isDarkTheme(theme),
      })}
    >
      <a href="/">
        <img
          className={styles.logo}
          src={logo}
          alt="logo"
          width="100"
          height="100"
        ></img>
      </a>
      <h1>Weather forecast</h1>
      <div className={styles.buttonContainer}>
        <div className={styles.switchContainer}>
          <TemperatureUnit toggleTemperature={toggleTemperature} />
          <Theme toggleTheme={toggleTheme} />
        </div>
        {formSubmitted ? (
          <LocationSearchForm
            getWeatherData={getWeatherData}
            setFormSubmitted={setFormSubmitted}
          />
        ) : (
          <LocationSearchButton setFormSubmitted={setFormSubmitted} />
        )}
      </div>
    </div>
  );
};
