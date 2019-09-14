import * as ACTIONS from "./actions";
import _ from "lodash";

const defaultState = {
  items: []
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_ITEM: {
      console.log(action);

      return (state = {
        ...state,
        items: action.payload
      });
    }

    default:
      return state;
  }
};

export default todoReducer;
