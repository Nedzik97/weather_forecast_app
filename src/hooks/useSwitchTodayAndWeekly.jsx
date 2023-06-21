import { useState } from "react";

export const useSwitchTodayAnaWeekly = () => {
  const [todayAndWeekle, setSwitchTodayAndWeekle] = useState("today");
  return { todayAndWeekle, setSwitchTodayAndWeekle };
};
