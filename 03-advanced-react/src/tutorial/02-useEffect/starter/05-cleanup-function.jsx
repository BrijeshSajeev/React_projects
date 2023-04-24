import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [isTrue, setIsTrue] = useState(true);
  console.log("render");
  const handler = () => {
    setIsTrue(!isTrue);
  };
  return (
    <div>
      <h1>Hello World</h1>
      {isTrue ? (
        <div>
          <Component />
          <button className="btn" onClick={handler}>
            Switch
          </button>
        </div>
      ) : (
        <div>
          <h3>Are You ok</h3>
          <button className="btn" onClick={handler}>
            Switch
          </button>
        </div>
      )}{" "}
    </div>
  );
};

const Component = () => {
  const someFunc = () => {
    console.log("Hello there");
  };
  useEffect(() => {
    window.addEventListener("click", someFunc);
    return () => {
      console.log("Cleaned...");
      window.removeEventListener("click", someFunc);
    };
  }, []);

  return <h4>How You Doing ?</h4>;
};

export default CleanupFunction;
