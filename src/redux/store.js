import { configureStore } from "@reduxjs/toolkit";
import reactionListReducer from "../components/reactionSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
// const store = configureStore({
//   reducer: {
//     reactionList: reactionListReducer.reducer,
//   },
// });

// export default store;
const reducers = combineReducers({
  reactionList: reactionListReducer.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
