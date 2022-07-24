import { configureStore } from "@reduxjs/toolkit";
import reactionListReducer from "../components/reactionSlice";

const store = configureStore({
  reducer: {
    reactionList: reactionListReducer.reducer,
  },
});

export default store;
