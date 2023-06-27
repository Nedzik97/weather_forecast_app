import { useState } from "react";

export const useLocation = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return {
    formSubmitted,
    setFormSubmitted,
  };
};
