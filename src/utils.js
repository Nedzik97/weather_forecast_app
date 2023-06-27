export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getDate = (date) => {
  const newDate = new Date(date);
  const fullDate =
    days[newDate.getDay()] +
    ", " +
    months[newDate.getMonth()] +
    " " +
    newDate.getDate();
  return fullDate;
};

export const getTime = (date) => {
  const newDate = new Date(date);
  const time = `${newDate.getHours()}:${newDate.getMinutes()}`;
  return time;
};

export const getHour = (date) => {
  let newDate = new Date(date);
  let hours = newDate.getHours();
  let period = "AM";
  if (hours >= 12) {
    period = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }
  const time = `${hours}:00${period}`;
  return time;
};

export const getDayWeatherForecast = (hoursWeathers, time) => {
  const currentDate = new Date(time);
  const currentHours = currentDate.getHours();

  const index = hoursWeathers.findIndex((weatherForHour) => {
    const date = new Date(weatherForHour.time);
    const hours = date.getHours();

    return currentHours === hours;
  });

  return hoursWeathers.slice(index, index + 7);
};

export const responsiveCarousel = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const isDarkTheme = (theme) => {
  if (theme === "dark") {
    return true;
  }
};

export const isTemperatureUnit = (temperatureUnit) => {
  if (temperatureUnit === "celsius") {
    return true;
  }
};

export const validateLanguageForm = (inputValue) => {
  var regex = /^[a-zA-Z\s]+$/;

  if (!regex.test(inputValue)) {
    alert("City name must be in English");
    return false;
  }

  return true;
};

export const Theme = {
  light: "light",
  dark: "dark",
};

export const TemperatureUnit = {
  celsius: "celsius",
  fahrenheit: "fahrenheit",
};

export const TodayAndWeekly = {
  today: "today",
  weekly: "weekly",
};
