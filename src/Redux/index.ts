import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { pizzaReducer } from "./reduces";
import logger from "redux-logger";

export const RootReducer = combineReducers({
  pizzaPage: pizzaReducer,
});
export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
