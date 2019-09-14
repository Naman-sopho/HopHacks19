import * as ACTIONS from "./actions";
import _ from "lodash";

const defaultState = {
  items: [],
  imageUrl: ""
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

    case ACTIONS.GET_IMAGE_URL: {
      return {
        ...state,
        imageUrl: action.payload
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
