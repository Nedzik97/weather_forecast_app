import { useState } from "react";

export const SetChoiceLocation = () => {
  const [isClick, setIsClick] = useState(false);
  const [location, setLocation] = useState("London");
  const [temperatureUnit, setTemperatureUnit] = useState(false);
  const [pageTheme, setPageTheme] = useState(false);

  return {
    isClick,
    setIsClick,
    location,
    setLocation,
    temperatureUnit,
    setTemperatureUnit,
    pageTheme,
    setPageTheme,
  };
};
