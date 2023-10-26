import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface PaletteBaseColorSlice {
  colorInputHex: string;
  colorBaseHex: string;
  colorIsChangeComplete: boolean;
}

const initialState: PaletteBaseColorSlice = {
  colorInputHex: "#ffbf65", // исходный цвет в поле ввода
  colorBaseHex: "#ffbf65", // текущий базовый цвет палитры (на основе которого создана текущая палитра)
  colorIsChangeComplete: false, // при отпускании мыши - изменение цвета завершено, при перемещении - нет
};

export const paletteBaseColorSlice = createSlice({
  name: "paletteBaseColor",
  initialState,
  reducers: {
    setColorBase: (state, action: PayloadAction<{ colorHex: string }>) => {
      state.colorBaseHex = action.payload.colorHex;
    },
    setColorInput: (state, action: PayloadAction<{ colorHex: string }>) => {
      state.colorInputHex = action.payload.colorHex;
    },
    setIsChangeComplete: (state, action: PayloadAction<boolean>) => {
      state.colorIsChangeComplete = action.payload;
    },
  },
});

export const { setColorBase, setColorInput, setIsChangeComplete } =
  paletteBaseColorSlice.actions;

export default paletteBaseColorSlice.reducer;

// Selectors
export const selectPaletteBaseColorHex = (state: RootState) =>
  state.paletteBaseColor.colorBaseHex; // базовый цвет для формирования палитры

export const selectPaletteInputColorHex = (state: RootState) =>
  state.paletteBaseColor.colorInputHex; // вводимый цвет

export const selectIsColorChangeComplete = (state: RootState) =>
  state.paletteBaseColor.colorIsChangeComplete; // изменение цвета завершено пользователем
