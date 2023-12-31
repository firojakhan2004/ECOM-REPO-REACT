import { combineReducers } from "redux";

import CountReducer from "./CountReducer";
import LoginReducer from "./LoginReducer";
import CartReducer from "./CartReducer";

export default combineReducers({
  CountReducer,
  LoginReducer,
  CartReducer,
});
