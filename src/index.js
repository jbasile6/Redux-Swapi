import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
// needed dependancies

// 1)applyMiddleware from redux- line 6

// 2)thunk from redux-thunk
import thunk from 'redux-thunk';
// 3)logger from redux-logger
import logger from 'redux-logger';
// 4)rootReducer from ./reducers
//Already done above - line 7

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
  /* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
