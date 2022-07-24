import { combineReducers } from "redux";

import reactionListReducer from "../components/reactionSlice";

const rootReducer = combineReducers({
  reactionList: reactionListReducer,
});

export default rootReducer;
