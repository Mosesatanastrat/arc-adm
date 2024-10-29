import { combineReducers } from "@reduxjs/toolkit";
import insertReducer from "../../slice/insert.slice";

const rootReducer = combineReducers({
  insert: insertReducer,
});

export default rootReducer;
