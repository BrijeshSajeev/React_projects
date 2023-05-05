import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
import { data } from "../../../data";
const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_LIST:
      return { ...state, people: [] };
    case RESET_LIST:
      return { ...state, people: data };
    case REMOVE_ITEM:
      const newPeople = state.people.filter(
        (person) => person.id !== action.id
      );
      return { ...state, people: newPeople };
    // console.log(newPeople);
    // return { ...state };
    default:
      return state;
  }
};

export default reducer;
