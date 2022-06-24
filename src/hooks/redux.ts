import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/store/store";

export const useSelectorHook: TypedUseSelectorHook<RootState> = useSelector
