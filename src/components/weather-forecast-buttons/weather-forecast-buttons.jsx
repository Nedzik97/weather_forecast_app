// import { TodayAndWeekly } from "../../utils";
import cx from "classnames";
import styles from "./weather-forecast-buttons.module.scss";

export const ForecastSwitchButtons = ({
  todayAndWeekly,
  toggleTodayAndWeekly,
}) => {
  return (
    <div className={styles.forecastButtonWrapper}>
      <button
        className={cx(styles.buttonToday, {
          [styles.active]: todayAndWeekly === "today",
        })}
        type="button"
        onClick={() => toggleTodayAndWeekly()}
      >
        Today
      </button>
      <button
        className={cx(styles.buttonWeekly, {
          [styles.active]: todayAndWeekly === "weekly",
        })}
        type="button"
        onClick={() => toggleTodayAndWeekly()}
      >
        Weekly
      </button>
    </div>
  );
};
