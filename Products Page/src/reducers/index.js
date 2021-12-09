import { combineReducers } from "redux";

import auth from "./auth";
import { cartReducer } from "./cart";
import { userReducer } from "./user";

export const reducers = combineReducers({ auth, cartReducer, userReducer });
