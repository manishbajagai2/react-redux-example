import { createStore, applyMiddleware } from "redux";
import { allReducers } from "./combineReducers";
import thunk from "redux-thunk";

export const store = createStore(allReducers,{},applyMiddleware(thunk))