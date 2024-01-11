import { combineReducers } from "redux";
import tasks from "./changeTaskStatusReducer";

const rootReducer = () => combineReducers({
    tasks
});

export default rootReducer