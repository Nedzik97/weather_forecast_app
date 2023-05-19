import { useState } from "react";

export const SetChoiceLocation = () => {
  const [isClick, setIsClick] = useState(false);
  const [location, setLocation] = useState("London");
  const [temperatureUnit, setTemperatureUnit] = useState(false);
  const [theme, setTheme] = useState({
    white: true,
    dark: false,
  });

  return {
    isClick,
    setIsClick,
    location,
    setLocation,
    temperatureUnit,
    setTemperatureUnit,
    theme,
    setTheme,
  };
};
