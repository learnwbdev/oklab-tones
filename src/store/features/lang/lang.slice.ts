import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type LangType = "EN" | "RU";

interface LangSliceState {
  lang: LangType;
}

// считать сохраненный язык из локального хранилища
// если нет сохраненной -> RU
const getLang = (): LangType => {
  // язык из локального хранилища
  const langStorage = localStorage?.getItem("lang")?.toString();
  if (langStorage && ["EN", "RU"].includes(langStorage))
    return langStorage as LangType;

  // в другом случае
  return "RU";
};

const initialState: LangSliceState = {
  lang: getLang(),
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    toggleLang: (state) => {
      state.lang = state.lang === "EN" ? "RU" : "EN";
    },
  },
});

export const { toggleLang } = langSlice.actions;

export default langSlice.reducer;

// Selectors
export const selectLang = (state: RootState) => state.lang.lang;
