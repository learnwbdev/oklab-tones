import styles from "./ColorSwatch.module.css";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import {
  selectPaletteInputColorHex,
  setColorInput,
} from "../../../../store/features/palette/paletteBaseColor.slice";

const ColorSwatchView = () => {
  const inputColor = useAppSelector(selectPaletteInputColorHex);
  const dispatch = useAppDispatch();

  const onClickSwatch = (swatchColor: string) => {
    dispatch(setColorInput({ colorHex: swatchColor }));
  };

  // добавить текущий цвет в сохраненные, если в локальном хранилище нет цветов
  if (!localStorage.getItem("swatches")) {
    localStorage.setItem("swatches", JSON.stringify([inputColor]));
  }

  // сохраненные предыдущие цвета из локального хранилища
  const swatches = JSON.parse(localStorage.getItem("swatches") || "{}");

  const swatchesElms = swatches.map((swatchColor: string, idx: number) => (
    <div
      className={styles.single_swatch}
      key={idx}
      style={{ backgroundColor: swatchColor }}
      onClick={() => onClickSwatch(swatchColor)}
    ></div>
  ));

  return <div className={styles.swatches_cont}>{swatchesElms}</div>;
};

export default ColorSwatchView;
