import { useState } from "react";
const UseStateBasics = () => {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" type="button" onClick={handleClick}>
        +
      </button>
    </div>
  );
};

export default UseStateBasics;
