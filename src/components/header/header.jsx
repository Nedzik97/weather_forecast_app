import cx from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../theme-context/ThemeContext";
import { LocationSearchForm } from "../location-search-form/location-search-form";
import { LocationSearchButton } from "../location-search-button/location-search-button";
import logo from "../../images/logo.jpg";
import celsius from "../../images/icons/celsius.svg";
import fahrenheit from "../../images/icons/fahrenheit.svg";
import lightIcon from "../../images/icons/light-theme.svg";
import darkIcon from "../../images/icons/dark-theme.svg";
import { isCelsiusTemperatureUnit } from "../../utils";
import styles from "./header.module.scss";

const TemperatureUnit = ({ toggleTemperatureUnit, temperatureUnit }) => {
  return (
    <button
      onClick={toggleTemperatureUnit}
      className={styles.degreeSwitch}
      type="button"
    >
      {isCelsiusTemperatureUnit(temperatureUnit) ? (
        <img src={fahrenheit} alt="fahrenheit" />
      ) : (
        <img src={celsius} alt="celsius" />
      )}
    </button>
  );
};

const Theme = ({ toggleTheme }) => {
  const isDarkTheme = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={styles.themeSwitch} type="burron">
      {!isDarkTheme ? (
        <img src={lightIcon} alt="light icon" />
      ) : (
        <img src={darkIcon} alt="dark icon" />
      )}
    </button>
  );
};

export const Header = ({
  getWeatherData,
  toggleTheme,
  toggleTemperatureUnit,
  temperatureUnit,
  formSubmitted,
  setFormSubmitted,
}) => {
  const isDarkTheme = useContext(ThemeContext);

  return (
    <div
      className={cx(styles.containerChoiceLocation, {
        [styles.darkTheme]: isDarkTheme,
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
          <TemperatureUnit
            toggleTemperatureUnit={toggleTemperatureUnit}
            temperatureUnit={temperatureUnit}
          />
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
