import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
