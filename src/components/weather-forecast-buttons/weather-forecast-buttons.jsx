import cx from "classnames";
import styles from "./weather-forecast-buttons.module.scss";

export const ForecastSwitchButtons = ({
  todayAndWeekle,
  setSwitchTodayAndWeekle,
}) => {
  return (
    <div className={styles.forecastButtonWrapper}>
      <button
        className={cx(styles.buttonToday, {
          [styles.active]: todayAndWeekle === "today",
        })}
        type="button"
        onClick={() => setSwitchTodayAndWeekle("today")}
      >
        Today
      </button>
      <button
        className={cx(styles.buttonWeekly, {
          [styles.active]: todayAndWeekle === "weekly",
        })}
        type="button"
        onClick={() => setSwitchTodayAndWeekle("weekly")}
      >
        Weekly
      </button>
    </div>
  );
};
