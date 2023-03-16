// @ts-nocheck
import { combineReducers } from "@reduxjs/toolkit";

import errorSlice from "./page/errorSlice";

const allReducers = combineReducers({
  errorInfo: errorSlice,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_STORE") {
    state = {};
  }
  return allReducers(state, action);
};

export default rootReducer;
