import { REMOVE_ERROR, SET_ERROR } from "../actions";

const initialState = {
  status: [],
};
export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        status: [...state.status, action.payload],
      };
    case REMOVE_ERROR:
      return {
        ...state,
        status: state.status.toSpliced(action.payload, 1), //ES2023
        // status: [...state.status.slice(0,action.payload), ...state.status.slice(action.payload + 1)]
      };
    default:
      return state;
  }
};
