import { useState } from "react";

export const UseLocation = () => {
  const [isClickLocation, setIsClickLocation] = useState(false);

  return {
    isClickLocation,
    setIsClickLocation,
  };
};
