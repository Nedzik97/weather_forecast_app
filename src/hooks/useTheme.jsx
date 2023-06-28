import { useState } from "react";
import { THEME } from "../utils";

export const useTheme = () => {
  const [theme, setTheme] = useState(THEME.today);

  const toggleTheme = () => {
    setTheme(theme === THEME.light ? THEME.dark : THEME.light);
  };

  return { theme, toggleTheme };
};
