import { useDispatch } from "react-redux";
import { AppDispatch } from "../type/types";

export const useAppDispatch = () => useDispatch<AppDispatch>();
