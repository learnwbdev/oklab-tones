import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface CopiedColorPayload {
  isColorCopied: boolean; // статус: цвет скопирован (по нажатию на один из цветов палитры)
  colorCopiedValueHex: string; // значение скопированного цвета в формате Hex
}

interface CopiedColor {
  isColorCopied: boolean; // статус: цвет скопирован (по нажатию на один из цветов палитры)
  colorCopiedValueHexCurr: string; // текущее значение скопированного цвета в формате Hex
  colorCopiedValueHexPrev: string; // предыдущее значение скопированного цвета в формате Hex
}

interface PaletteActionsState {
  copiedColor: CopiedColor;
}

const initialState: PaletteActionsState = {
  copiedColor: {
    isColorCopied: false,
    colorCopiedValueHexCurr: "",
    colorCopiedValueHexPrev: "",
  },
};

export const paletteActionsSlice = createSlice({
  name: "paletteActions",
  initialState,
  reducers: {
    setCopiedColor: (state, action: PayloadAction<CopiedColorPayload>) => {
      // изменить статус: true - цвет скопирован (отобразить сообщение), false - сообщение скрыто
      state.copiedColor.isColorCopied = action.payload.isColorCopied;
      // сохранить предыдущее значение
      state.copiedColor.colorCopiedValueHexPrev =
        state.copiedColor.colorCopiedValueHexCurr;
      // сохранить текущее значение
      state.copiedColor.colorCopiedValueHexCurr =
        action.payload.colorCopiedValueHex;
    },
  },
});

export const { setCopiedColor } = paletteActionsSlice.actions;

export default paletteActionsSlice.reducer;

// Selectors
export const selectPaletteCopiedColor = (state: RootState) =>
  state.paletteActions.copiedColor;
