import { useState } from "react";
import { TIME_PERIOD } from "../utils";

export const useTimePeriod = () => {
  const [timePeriod, setTimePeriod] = useState(TIME_PERIOD.today);

  const toggleTimePeriod = (newTimePeriod) => {
    setTimePeriod(newTimePeriod);
  };

  return { timePeriod, toggleTimePeriod };
};
