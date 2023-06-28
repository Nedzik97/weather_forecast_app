import { useState } from "react";
import { TEMPERATURE_UNIT } from "../utils";

export const useTemperatureUnit = () => {
  const [temperatureUnit, setTemperatureUnit] = useState(
    TEMPERATURE_UNIT.celsius
  );

  const toggleTemperature = () => {
    setTemperatureUnit(
      temperatureUnit === TEMPERATURE_UNIT.celsius
        ? TEMPERATURE_UNIT.fahrenheit
        : TEMPERATURE_UNIT.celsius
    );
  };

  return { temperatureUnit, toggleTemperature };
};
