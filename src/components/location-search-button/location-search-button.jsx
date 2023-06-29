import cx from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../theme-context/ThemeContext";
import choiceLocationIcon from "../../images/icons/choice-location-icon.svg";
import styles from "./location-search-button.module.scss";

export const LocationSearchButton = ({ setFormSubmitted }) => {
  const isDarkTheme = useContext(ThemeContext);
  return (
    <button
      onClick={() => setFormSubmitted((prev) => !prev)}
      className={cx(styles.buttonChoiceLocation, {
        [styles.darkButton]: isDarkTheme,
      })}
      type="button"
    >
      <img src={choiceLocationIcon} alt="choice-location icon" />
      Location
    </button>
  );
};
