import axios from "axios";

//const BACKEND_URL = "https://plated-entry-220616.appspot.com";
const BACKEND_URL = "https://5000-dot-4624257-dot-devshell.appspot.com";

// types of action
export const CREATE_ITEM = "CREATE_ITEM";
export const GET_IMAGE_URL = "GET IMAGE";
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

export function getImageURL(text) {
  return dispatch => {
    axios
      .post(BACKEND_URL + "/text-to-image/", { text: text })
      .then(response => {
        console.log(text);
        dispatch({
          type: GET_IMAGE_URL,
          payload: response.data
        });
      });
  };
}
