import { useEffect } from "react";
import logo from "../../img/logo.jpg";
import cx from "classnames";
import styles from "./choice-location.module.scss";

export const ChoiceLocation = ({
  setTemperatureUnit,
  temperatureUnit,
  setPageTheme,
  pageTheme,
  isClick,
  location,
  setLocation,
  setIsClick,
  getForecastWeather,
  currentWeather,
}) => {
  const handleButtonLocation = () => {
    setIsClick(true);
  };

  const handleInputLocation = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    getForecastWeather(location);
    if (Object.keys(currentWeather).length < 0) {
    }
    setLocation("");
  }, []);

  const getLocationForm = (e) => {
    e.preventDefault();
    if (location) {
      getForecastWeather(location);
    }
    setLocation("");
    setIsClick(false);
  };

  return (
    <div
      className={cx(styles.containerChoiceLocation, {
        [styles.darkTheme]: pageTheme,
      })}
    >
      <a href="/">
        <img src={logo} alt="logo" width="100" height="100"></img>
      </a>
      <h1>Weather forecast</h1>
      <div className={styles.buttonContainer}>
        <div className={styles.switchContainer}>
          <button
            onClick={() => setTemperatureUnit((prev) => !prev)}
            className={styles.degreeSwitch}
            type="button"
          >
            {temperatureUnit ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fill="#ffffff"
                  d="M16.5 5c1.55 0 3 .47 4.19 1.28l-1.16 2.89A4.47 4.47 0 0 0 16.5 8C14 8 12 10 12 12.5s2 4.5 4.5 4.5c1.03 0 1.97-.34 2.73-.92l1.14 2.85A7.47 7.47 0 0 1 16.5 20 7.5 7.5 0 0 1 9 12.5 7.5 7.5 0 0 1 16.5 5M6 3a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Z"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fill="#ffffff"
                  d="M11 20V5h9v3h-6v3h5v3h-5v6h-3M6 3a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Z"
                />
              </svg>
            )}
          </button>
          <button
            onClick={() => setPageTheme((prev) => !prev)}
            className={styles.themeSwitch}
            type="burron"
          >
            {!pageTheme ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g data-name="Layer 2">
                  <path
                    fill="#3b82f6"
                    d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3Z"
                    data-name="moon"
                  />
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                space="preserve"
                senable-background="new 0 0 22.006 22.006"
                viewBox="0 0 22.006 22.006"
              >
                <path
                  fill="#FFFF00"
                  d="M4.63 6.045A1 1 0 1 0 6.044 4.63l-1.4-1.4A1.001 1.001 0 1 0 3.23 4.644l1.4 1.401zM20.997 10.003h-1.98a.999.999 0 1 0 0 2h1.98a1 1 0 1 0 0-2zM4 11.003a1 1 0 0 0-1.01-1H1.009c-.558 0-1.009.444-1.009 1 0 .553.443 1 1.009 1H2.99c.558 0 1.01-.443 1.01-1zM11.003 5a6 6 0 0 0 0 12c3.312 0 6-2.687 6-6s-2.688-6-6-6zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM4.63 15.962l-1.4 1.4a1 1 0 1 0 1.414 1.414l1.4-1.4a1.001 1.001 0 1 0-1.414-1.414zM17.376 6.045l1.4-1.401a1 1 0 1 0-1.414-1.414l-1.4 1.4a1.002 1.002 0 0 0-.007 1.421c.392.39 1.021.393 1.421-.006zM11.003 18.006a1 1 0 0 0-1 1.011v1.98a1.001 1.001 0 1 0 2 0v-1.98c0-.559-.443-1.011-1-1.011zM17.376 15.962a1 1 0 1 0-1.414 1.414l1.4 1.4a1.003 1.003 0 0 0 1.421.007.998.998 0 0 0-.007-1.421l-1.4-1.4zM11.003 4c.553 0 1-.443 1-1.01V1.01a1 1 0 1 0-2 0v1.98c0 .558.444 1.01 1 1.01z"
                />
              </svg>
            )}
          </button>
        </div>
        {!isClick ? (
          <button
            onClick={() => handleButtonLocation()}
            className={styles.buttonChoiceLocation}
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
        ) : (
          <form
            onSubmit={(e) => getLocationForm(e)}
            className={styles.locationForm}
            method="get"
          >
            <input
              onInput={(e) => handleInputLocation(e)}
              className={styles.locationField}
              value={location}
              type="text"
              autoComplete="off"
            ></input>
            <span className={styles.bar}></span>
            <label className={styles.locationLabel}>Сity</label>
          </form>
        )}
      </div>
    </div>
  );
};
