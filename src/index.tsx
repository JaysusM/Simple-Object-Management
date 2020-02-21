import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import objectReducer from "./reducers/object/reducer";

const store = createStore(
  objectReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
