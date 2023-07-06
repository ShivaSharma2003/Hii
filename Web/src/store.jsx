import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {};
const reducers = combineReducers({});

const store = configureStore(
  {
    reducer: reducers,
  },
  initialState,
  applyMiddleware(composeWithDevTools([thunk]))
);

export default store;
