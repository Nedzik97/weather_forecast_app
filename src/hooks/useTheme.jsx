import { useState } from "react";
import { THEME, checkIsDarkTheme } from "../utils";

export const useTheme = () => {
  const [theme, setTheme] = useState(THEME.light);

  const isDarkTheme = checkIsDarkTheme(theme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      checkIsDarkTheme(prevTheme) ? THEME.light : THEME.dark
    );
  };

  return { isDarkTheme, toggleTheme };
};
