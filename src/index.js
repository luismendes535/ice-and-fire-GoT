import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { store } from "./createStore";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
