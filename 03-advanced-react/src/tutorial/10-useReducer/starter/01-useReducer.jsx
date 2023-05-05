import React, { useReducer } from "react";
import { data } from "../../../data";
const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_LIST":
      return { ...state, people: [] };
    case "RESET_LIST":
      return { ...state, people: data };
    case "REMOVE_ITEM":
      const newPeople = state.people.filter(
        (person) => person.id !== action.id
      );
      return { ...state, people: newPeople };
    // console.log(newPeople);
    // return { ...state };
    default:
      break;
  }
};

const ReducerBasics = () => {
  const [people, setPeople] = React.useState(data);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const clearList = () => {
    // setPeople([]);
    dispatch({ type: "CLEAR_LIST" });
  };
  const resetList = () => {
    // setPeople(data);
    dispatch({ type: "RESET_LIST" });
  };
  return (
    <div className="container">
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length !== 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
