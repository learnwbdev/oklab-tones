import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const ThemeType = ["light", "dark"] as const;
type ThemeType = (typeof ThemeType)[number];

interface ThemeSliceState {
  theme: ThemeType;
}

// считать сохраненную тему из локального хранилища
// если нет сохраненной - тема из настроек системы
// если нет настроек -> светлая тема
const getTheme = (): ThemeType => {
  // тема из локального хранилища
  const themeStorage = localStorage?.getItem("theme")?.toString();
  if (themeStorage && ThemeType.includes(themeStorage as ThemeType))
    return themeStorage as ThemeType;

  // тема системы
  if (window?.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";

  // в другом случае
  return "light";
};

const initialState: ThemeSliceState = {
  theme: getTheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

// Selectors
export const selectTheme = (state: RootState) => state.theme.theme;
