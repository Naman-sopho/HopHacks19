import * as ACTIONS from "./actions";
import _ from "lodash";

const defaultState = {
  items: [],
  imageUrl: "",
  imageToTextVec: ""
};

const reducer = (state = defaultState, action) => {
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

    case ACTIONS.IMAGE_TO_TEXT: {
      return {
        ...state,
        imageToTextVec: action.payload.responses[0].fullTextAnnotation.text
      };
    }

    default:
      return state;
  }
};

export default reducer;
