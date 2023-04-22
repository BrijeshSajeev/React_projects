import React from "react";
const UseStateGotcha = () => {
  const [count, setCount] = React.useState(0);
  const handler = () => {
    setCount((prev) => {
      const newState = prev + 1;
      return newState;
    });
    // setCount(count + 1);
  };
  console.log(count);

  return (
    <>
      <h2>{count}</h2>
      <button className="btn" onClick={handler}>
        +
      </button>
    </>
  );
};

export default UseStateGotcha;
