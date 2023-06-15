import styles from "./location-search-form.module.scss";

export const LocationSearchForm = ({
  getCurrentWeather,
  getForecastForHour,
  setIsClickLocation,
  getForecastWeekly,
}) => {
  const handleLocationForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputValue = formData.get("location");
    if (inputValue) {
      getCurrentWeather(inputValue);
      getForecastForHour(inputValue);
      getForecastWeekly(inputValue);
    }
    setIsClickLocation((prev) => !prev);
  };

  return (
    <form
      onSubmit={(e) => handleLocationForm(e)}
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
      <label className={styles.locationLabel}>Сity</label>
    </form>
  );
};
