import axios from "axios";

const BACKEND_URL = "https://plated-entry-220616.appspot.com";

// types of action
export const CREATE_ITEM = "CREATE_ITEM";
// actions
export function createItem() {
  console.log("request");
  return dispatch => {
    axios.get(BACKEND_URL + "/").then(response => {
      console.log(response);
      dispatch({
        type: CREATE_ITEM,
        payload: response.data
      });
    });
  };
}
