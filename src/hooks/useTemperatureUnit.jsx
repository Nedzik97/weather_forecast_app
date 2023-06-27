import { useState } from "react";
import { TemperatureUnit } from "../utils";

export const useTemperatureUnit = () => {
  const [temperatureUnit, setTemperatureUnit] = useState(
    TemperatureUnit.celsius
  );

  const toggleTemperature = () => {
    setTemperatureUnit(
      temperatureUnit === TemperatureUnit.celsius
        ? TemperatureUnit.fahrenheit
        : TemperatureUnit.celsius
    );
  };

  return { temperatureUnit, toggleTemperature };
};
