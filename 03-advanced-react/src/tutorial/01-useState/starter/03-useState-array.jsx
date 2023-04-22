import { data } from "../../../data";
import React from "react";
const UseStateArray = () => {
  const [arr, setArray] = React.useState(data);
  // console.log(arr);

  const handleDel = (id) => {
    const newPeople = arr.filter((ele) => ele.id !== id);
    setArray(newPeople);
  };
  const handleClear = () => {
    setArray([]);
  };
  let html;
  return (
    <div>
      {arr.map((ele) => {
        const { id, name } = ele;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              className="btn"
              onClick={() => {
                handleDel(id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={handleClear}
      >
        clear items
      </button>
    </div>
  );
};
export default UseStateArray;
