import { ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { RootReducer, store } from "../Redux";
import { actions } from "../Redux/actions";

export interface pizzaType {
  id: number;
  imageUrl: string;
  name: string;
  types: Array<Number>;
  sizes: Array<Number>;
  price: number;
  category: number;
  rating: number;
}
type RootReducerType = typeof RootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type InferActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;
export type BaseThunkType<
  A extends Action = Action,
  R = Promise<void>
> = ThunkAction<R, AppStateType, unknown, A>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type ThunkType = BaseThunkType<ActionsType>;
export type ActionsType = InferActionsTypes<typeof actions>;
