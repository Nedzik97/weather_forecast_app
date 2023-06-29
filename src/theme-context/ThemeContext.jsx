import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children, isDarkTheme }) => {
  return (
    <ThemeContext.Provider value={isDarkTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
