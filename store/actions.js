import axios from "axios";

const BACKEND_URL = "https://plated-entry-220616.appspot.com";
//const BACKEND_URL = "https://5000-dot-4624257-dot-devshell.appspot.com";
const GOOGLE_API = "https://vision.googleapis.com/v1/images:annotate";

// types of action
export const CREATE_ITEM = "CREATE_ITEM";
export const GET_IMAGE_URL = "GET IMAGE";
export const IMAGE_TO_TEXT = "IMAGE TO TEXT";

// actions
export function createItem() {
  //console.log("request");
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

export function getImageURL(dispatch) {
  return text => {
    console.log("fkds");
    const data = new FormData();
    data.append("text", text);
    axios.post(BACKEND_URL + "/text-to-image", data).then(response => {
      console.log(text);
      dispatch({
        type: GET_IMAGE_URL,
        payload: response.data
      });
    });
  };
}

export function textToMusic(dispatch) {
  return text => {
    const data = new FormData();
    data.append();
  };
}

export function handleImageToText(dispatch) {
  return imageLink => {
    const data = {
      requests: [
        {
          image: {
            source: {
              imageUri: imageLink
            }
          },
          features: [
            {
              type: "TEXT_DETECTION"
            }
          ]
        }
      ]
    };
    axios
      .post(GOOGLE_API + "/?key=AIzaSyBXsxfHKx_A35XXmU28XDMtUliuWIXTDf0", data)
      .then(response => {
        dispatch({
          type: IMAGE_TO_TEXT,
          payload: response.data
        });
      });
  };
}
