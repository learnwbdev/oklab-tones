import { useCallback, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { fetchPalette } from "../store/features/palette/palette.slice";
import {
  selectIsColorChangeComplete,
  selectPaletteInputColorHex,
  setColorBase,
} from "../store/features/palette/paletteBaseColor.slice";
import { useAppDispatch, useAppSelector } from "../store/store";

// delayInMsec - время, через которое обновлять палитру (в миллисекундах)

export const useUpdatePalette = (delayInMsec: number = 100) => {
  // цвет из Color Picker или текстового поля
  const inputColor = useAppSelector(selectPaletteInputColorHex);
  const isColorChangeComplete = useAppSelector(selectIsColorChangeComplete);
  // изменять базовый цвет только каждые 100мс (`delayInMsec`) (чтобы не изменять цвет при каждом перемещении по Color Picker)
  const [baseColor] = useDebounce(inputColor, delayInMsec);
  // если отпустили курсор (завершили изменения цвета), то сразу изменить цвет
  const changedColor = isColorChangeComplete ? inputColor : baseColor;
  const dispatch = useAppDispatch();

  // добавить последний цвет в сохраненные образцы (swatches)
  const addNewSwatch = (colorHex: string) => {
    // загрузить предыдущие 12 цветов из local storage
    const swatches = JSON.parse(localStorage.getItem("swatches") || "[]");
    if (!swatches.includes(colorHex)) {
      swatches.unshift(colorHex);
      swatches.splice(12);
    } else {
      const itemIdx = swatches.indexOf(colorHex);
      swatches.splice(itemIdx, 1);
      swatches.unshift(colorHex);
    }
    localStorage.setItem("swatches", JSON.stringify(swatches));
  };

  const savedAddNewSwatch = useCallback(addNewSwatch, []);

  useEffect(() => {
    // если значение не пусто
    if (changedColor) {
      savedAddNewSwatch(changedColor);
      dispatch(setColorBase({ colorHex: changedColor }));
      dispatch(fetchPalette({ colorBaseHex: changedColor }));
    }
  }, [changedColor, dispatch, savedAddNewSwatch]);
};
