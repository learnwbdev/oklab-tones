import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LabelType } from "../../..";
import { RootState } from "../../store";

interface PaletteSettingsSliceState {
  // label for the colors in the tonal row:
  // tone (HCT), gray component for RGB color, LAB Lightness, CAM16 Chroma, IPT Hue
  labelOpt: LabelType;
}

const getLabel = (): LabelType => {
  // настройка из локального хранилища
  const labelStorage = localStorage?.getItem("label")?.toString();
  // если настройка есть в лок. хранилище и имеет допустимое значение
  if (labelStorage && LabelType.includes(labelStorage as LabelType))
    return labelStorage as LabelType;

  // в другом случае
  return "tone";
};

const initialState: PaletteSettingsSliceState = {
  labelOpt: getLabel(),
};

export const paletteSettingsSlice = createSlice({
  name: "paletteSettings",
  initialState,
  reducers: {
    setLabel: (state, action: PayloadAction<{ labelOpt: LabelType }>) => {
      state.labelOpt = action.payload.labelOpt;
    },
  },
});

export const { setLabel } = paletteSettingsSlice.actions;

export default paletteSettingsSlice.reducer;

// Selectors
export const selectPaletteAllSettings = (state: RootState) =>
  state.paletteSettings;

export const selectPaletteSettingsLabel = (state: RootState) =>
  state.paletteSettings.labelOpt;
