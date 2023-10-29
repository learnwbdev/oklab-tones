import styles from "./ColorPicker.module.css";
import { HexColorPicker } from "react-colorful";
import {
  selectPaletteInputColorHex,
  setColorInput,
  setIsChangeComplete,
} from "../../../store/features/palette/paletteBaseColor.slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import ColorPickerFormats from "../color-picker-formats/ColorPickerFormats";

const ColorPicker = () => {
  const inputColor = useAppSelector(selectPaletteInputColorHex);
  const dispatch = useAppDispatch();

  // изменение цвета
  const onChangeColor = (newColor: string) => {
    dispatch(setColorInput({ colorHex: newColor }));
  };

  const handleChangeEnd = () => {
    dispatch(setIsChangeComplete(true));
  };

  const handleChangeStart = () => {
    dispatch(setIsChangeComplete(false));
  };

  return (
    <div className={styles.color_picker}>
      <HexColorPicker
        color={inputColor}
        onChange={onChangeColor}
        onMouseDown={handleChangeStart}
        onMouseUp={handleChangeEnd}
        onTouchStart={handleChangeStart}
      />
      <ColorPickerFormats />
    </div>
  );
};

export default ColorPicker;
