import { combineReducers } from "redux";
import lightReducer from "./lightReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    light: lightReducer
});

export default rootReducer;