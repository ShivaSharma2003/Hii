import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loginReducer, registerReducer } from "./Redux/Reducers/authReducer";

const initialState = {};

const reducers = combineReducers({
  loginUser: loginReducer,
  registerUser: registerReducer,
});

const store = configureStore(
  {
    reducer: reducers,
  },
  initialState,
  applyMiddleware(composeWithDevTools([thunk]))
);

export default store;
