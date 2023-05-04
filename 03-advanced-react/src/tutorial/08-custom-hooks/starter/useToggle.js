import { useState } from "react";
const useToggle = (defaultValue) => {
  const [state, setState] = useState(defaultValue);

  const toggle = () => {
    setState(!state);
  };

  return { state, toggle };
};

export default useToggle;
