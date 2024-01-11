import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";


const initialState = {};

const composeFunk = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composeEnhancers = composeFunk(applyMiddleware(thunk))

const store = createStore(rootReducer(), initialState, composeEnhancers);

export default store;



