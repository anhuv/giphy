import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

// ReactDOM.render(<App />, document.getElementById("root"));

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  //   <Provider store={store}>
  //   <App />
);

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'

// import { App } from './App'
// import createStore from './createReduxStore'

// const store = createStore()

// // As of React 18
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )
