import { useContext } from "react";
import { ThemeContext } from "../App/App";
import cx from "classnames";
import styles from "./location-search-button.module.scss";

export const LocationSearchButton = ({ setIsClickLocation }) => {
  const theme = useContext(ThemeContext);
  return (
    <button
      onClick={() => setIsClickLocation((prev) => !prev)}
      className={cx(styles.buttonChoiceLocation, {
        [styles.darkButton]: theme.dark,
      })}
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="17"
        fill="none"
      >
        <path
          fill="#ffffff"
          d="M16.785.956.84 7.104C-.248 7.541-.24 8.148.64 8.42l4.094 1.277 9.472-5.976c.448-.272.857-.126.52.173l-7.673 6.925H7.05l.002.001-.283 4.22c.414 0 .597-.19.829-.414l1.988-1.934 4.136 3.055c.762.42 1.31.205 1.5-.706l2.715-12.795c.278-1.114-.425-1.618-1.153-1.29Z"
        />
      </svg>
      Location
    </button>
  );
};
