import { useState } from "react";

export const UseSwitchButtons = () => {
  const [switchTodayAndWeekle, setSwitchTodayAndWeekle] = useState({
    today: true,
    weekly: false,
  });
  return { switchTodayAndWeekle, setSwitchTodayAndWeekle };
};
