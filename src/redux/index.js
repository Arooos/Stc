import { compose, createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";


const initialState = {};

const composeFunk = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

const store = createStore(rootReducer(), initialState, composeFunk());

export default store;



