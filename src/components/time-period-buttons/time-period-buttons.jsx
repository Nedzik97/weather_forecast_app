import cx from "classnames";
import { TIME_PERIOD } from "../../utils";
import styles from "./time-period-buttons.module.scss";

export const TimePeriodButtons = ({ timePeriod, setTimePeriod }) => {
  return (
    <div className={styles.forecastButtonWrapper}>
      <button
        className={cx(styles.buttonToday, {
          [styles.active]: timePeriod === TIME_PERIOD.today,
        })}
        type="button"
        onClick={() => setTimePeriod(TIME_PERIOD.today)}
      >
        Today
      </button>
      <button
        className={cx(styles.buttonWeekly, {
          [styles.active]: timePeriod === TIME_PERIOD.weekly,
        })}
        type="button"
        onClick={() => setTimePeriod(TIME_PERIOD.weekly)}
      >
        Weekly
      </button>
    </div>
  );
};
