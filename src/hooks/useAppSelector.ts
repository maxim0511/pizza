import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../type/types";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector