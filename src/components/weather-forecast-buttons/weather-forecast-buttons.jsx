import { useContext } from "react";
import { ThemeContext } from "../App/App";
import cx from "classnames";
import styles from "./weather-forecast-buttons.module.scss";

export const ForecastSwitchButtons = ({
  switchTodayAndWeekle,
  setSwitchTodayAndWeekle,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.forecastButtonWrapper}>
      <button
        className={cx(styles.buttonToday, {
          [styles.active]: switchTodayAndWeekle.today,
        })}
        type="button"
        onClick={() =>
          setSwitchTodayAndWeekle({
            today: true,
            weekly: false,
          })
        }
      >
        Today
      </button>
      <button
        className={cx(styles.buttonWeekly, {
          [styles.active]: switchTodayAndWeekle.weekly,
        })}
        type="button"
        onClick={() =>
          setSwitchTodayAndWeekle({
            today: false,
            weekly: true,
          })
        }
      >
        Weekly
      </button>
    </div>
  );
};
