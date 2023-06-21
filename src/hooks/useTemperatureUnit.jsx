import { useState } from "react";

export const useTemperatureUnit = () => {
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");

  const toggleTemperature = () => {
    setTemperatureUnit(
      temperatureUnit === "celsius" ? "fahrenheit" : "celsius"
    );
  };

  return { temperatureUnit, toggleTemperature };
};
