import { useState } from "react";
import { TodayAndWeekly } from "../utils";

export const useSwitchTodayAnaWeekly = () => {
  const [todayAndWeekly, setSwitchTodayAndWeekly] = useState(
    TodayAndWeekly.today
  );

  const toggleTodayAndWeekly = () => {
    setSwitchTodayAndWeekly(
      todayAndWeekly === TodayAndWeekly.today
        ? TodayAndWeekly.weekly
        : TodayAndWeekly.today
    );
  };

  return { todayAndWeekly, toggleTodayAndWeekly };
};
