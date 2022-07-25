import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// ReactDOM.render(<App />, document.getElementById("root"));

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
let persistor = persistStore(store);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
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

// ...
