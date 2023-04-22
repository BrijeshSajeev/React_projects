import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Brijesh",
    age: 19,
    hobby: "Reading Books..",
  });

  const handler = () => {
    setPerson({ name: "sherbin", age: 19, hobby: "Fishing" });
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>AGE : {person.age}</h2>
      <h4>HOBBY : {person.hobby}</h4>
      <button className="btn" onClick={handler}>
        Show Sherbin
      </button>
    </>
  );
};

export default UseStateObject;
