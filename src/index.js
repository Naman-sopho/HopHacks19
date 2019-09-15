import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../store/store";
import "./styles.css";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <Homepage />
    </ReduxProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
