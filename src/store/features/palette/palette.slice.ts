import {
  EntityId,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { NamedTonalRowType } from "../../..";
import colorApi from "../../../api/colorApi";
import { RootState } from "../../store";

const paletteAdapter = createEntityAdapter<NamedTonalRowType>({
  // наименование оттеночного ряда как ID
  selectId: (palette) => palette.name,
});

const initialState = paletteAdapter.getInitialState();

export const fetchPalette = createAsyncThunk(
  "palette/fetchTonalRows",
  async ({ colorBaseHex: colorBaseHex }: { colorBaseHex: string }) => {
    const response = await colorApi.get(
      `/palette/hex/${encodeURIComponent(colorBaseHex)}`
    );
    return { tonalRows: response.data.palette as NamedTonalRowType[] };
  }
);

export const paletteSlice = createSlice({
  name: "palette",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPalette.fulfilled, (state, action) => {
      paletteAdapter.setAll(state, action.payload.tonalRows);
    });
  },
});

export default paletteSlice.reducer;

// Selectors
export const {
  // selectAll: selectTonalRowsAll, // выбор всех оттеночных рядов палитры
  selectIds: selectTonalRowsNames, // выбор наименований оттеночных рядов палитры
  selectById: selectTonalRowByName, // выбор оттеночного ряда по имени
} = paletteAdapter.getSelectors<RootState>((state) => state.palette);

// выбор оттенка (Tone) по имени оттеночного ряда и значению оттенка
export const selectPaletteTone = (
  state: RootState,
  tonalRowName: EntityId,
  tone: number
) =>
  selectTonalRowByName(state, tonalRowName)?.tonalRow.find(
    (tones) => tones.tone === tone
  );
