import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import choiceLocationIcon from "../../images/icons/choice-location-icon.svg";
import cx from "classnames";
import styles from "./location-search-button.module.scss";

export const LocationSearchButton = ({ setIsClickLocation }) => {
  const theme = useContext(ThemeContext);
  return (
    <button
      onClick={() => setIsClickLocation((prev) => !prev)}
      className={cx(styles.buttonChoiceLocation, {
        [styles.darkButton]: theme === "dark",
      })}
      type="button"
    >
      <img src={choiceLocationIcon} alt="choice-location icon" />
      Location
    </button>
  );
};
