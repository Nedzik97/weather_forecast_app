import { useState } from "react";

export const UseTemperatureUnit = () => {
  const [temperatureUnit, setTemperatureUnit] = useState({
    celsius: true,
    fahrenheit: false,
  });

  const changeTemperatureUnit = () => {
    setTemperatureUnit({
      celsius: !temperatureUnit.celsius,
      fahrenheit: !temperatureUnit.fahrenheit,
    });
  };

  return { temperatureUnit, changeTemperatureUnit };
};
