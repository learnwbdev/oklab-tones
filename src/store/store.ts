import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  langReducer,
  themeReducer,
  paletteReducer,
  paletteBaseColorReducer,
  paletteSettingsReducer,
  paletteActionsReducer,
} from "./features";

const store = configureStore({
  reducer: {
    lang: langReducer,
    theme: themeReducer,
    palette: paletteReducer,
    paletteBaseColor: paletteBaseColorReducer,
    paletteSettings: paletteSettingsReducer,
    paletteActions: paletteActionsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
