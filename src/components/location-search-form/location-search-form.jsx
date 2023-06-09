import cx from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../theme-context/ThemeContext";
import { validateLanguageForm } from "../../utils";
import styles from "./location-search-form.module.scss";

export const LocationSearchForm = ({ getWeatherData, setFormSubmitted }) => {
  const isDarkTheme = useContext(ThemeContext);

  const submitLocationForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputValue = formData.get("location");
    if (inputValue) {
      getWeatherData(inputValue);
    }
    validateLanguageForm(inputValue);
    setFormSubmitted((prev) => !prev);
  };

  return (
    <form
      onSubmit={submitLocationForm}
      className={styles.locationForm}
      method="get"
    >
      <input
        className={styles.locationField}
        type="text"
        name="location"
        autoComplete="off"
      ></input>
      <span className={styles.bar}></span>
      <label
        className={cx(styles.locationLabel, {
          [styles.darkLabel]: isDarkTheme,
        })}
      >
        Сity
      </label>
    </form>
  );
};
