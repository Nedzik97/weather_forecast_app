import cx from "classnames";
import { isTimePeriod, TIME_PERIOD } from "../../utils";
import styles from "./time-period-buttons.module.scss";

export const TimePeriodButtons = ({ timePeriod, toggleTimePeriod }) => {
  return (
    <div className={styles.forecastButtonWrapper}>
      <button
        className={cx(styles.buttonToday, {
          [styles.active]: isTimePeriod(TIME_PERIOD.today, timePeriod),
        })}
        type="button"
        onClick={() => toggleTimePeriod(TIME_PERIOD.today)}
      >
        Today
      </button>
      <button
        className={cx(styles.buttonWeekly, {
          [styles.active]: isTimePeriod(TIME_PERIOD.weekly, timePeriod),
        })}
        type="button"
        onClick={() => toggleTimePeriod(TIME_PERIOD.weekly)}
      >
        Weekly
      </button>
    </div>
  );
};
