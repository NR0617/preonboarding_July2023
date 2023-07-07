import { createStore } from "./createStore";
const initialState = {
  count: 0,
};

export const testReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "plus":
      return { ...state, count: state.count++ };
    case "minus":
      return { ...state, count: state.count-- };
    default:
      return state;
  }
};

export const store = createStore(testReducer);
