import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import todoToolKitReducer from './todoSlice';

const rootReducer = combineReducers({
    todo: todoReducer,
    todoToolKit: todoToolKitReducer,
});

export default rootReducer;