import { useState } from "react";

export const UsePageTheme = () => {
  const [pageTheme, setPageTheme] = useState({
    white: true,
    dark: false,
  });

  const changePageTheme = () => {
    setPageTheme({
      white: !pageTheme.white,
      dark: !pageTheme.dark,
    });
  };
  return { pageTheme, changePageTheme };
};
