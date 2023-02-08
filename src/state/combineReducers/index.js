import { combineReducers } from "redux";
import reducer from "./accountReducers";

export const allReducers = combineReducers({
    account : reducer
})