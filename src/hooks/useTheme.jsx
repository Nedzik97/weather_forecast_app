import { useState } from "react";
import { Theme } from "../utils";

export const useTheme = () => {
  const [theme, setTheme] = useState(Theme.today);

  const toggleTheme = () => {
    setTheme(theme === Theme.light ? Theme.dark : Theme.light);
  };

  return { theme, toggleTheme };
};
