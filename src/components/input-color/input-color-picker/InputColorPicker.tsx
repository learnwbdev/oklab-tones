import styles from "./InputColorPicker.module.css";
import { useId, useRef, useState } from "react";
import { useOnClickOutside } from "../../..";
import ColorPicker from "../color-picker";
import { useAppSelector } from "../../../store/store";
import { selectPaletteInputColorHex } from "../../../store/features/palette/paletteBaseColor.slice";

const InputColorPicker = () => {
  const idInputColorPicker = useId(); // id для label для Color Picker
  // ref для label для Color Picker для hook useOnClickOutside
  const refInputColorPicker = useRef<HTMLLabelElement>(null);
  // флаг: отображать Color Picker или нет
  const [isShownColorPicker, setIsShownColorPicker] = useState(false);
  // текущий цвет
  const inputColor = useAppSelector(selectPaletteInputColorHex);

  // показать Color Picker
  const showColorPicker = () => {
    setIsShownColorPicker((prev) => !prev);
  };

  // закрыть Color Picker
  const closeColorPicker = () => {
    setIsShownColorPicker(false);
  };

  // закрыть Color Picker при фокусировке вне Color Picker
  useOnClickOutside(refInputColorPicker, closeColorPicker);

  return (
    <div className={styles.input_color_picker_cont}>
      <input
        className={styles.input_for_color_picker}
        type="color"
        id={idInputColorPicker}
      />
      <label
        htmlFor={idInputColorPicker}
        onClick={(event) => event.preventDefault()}
        ref={refInputColorPicker}
      >
        <div
          className={
            isShownColorPicker
              ? [styles.color_area, styles.color_area__outline].join(" ")
              : styles.color_area
          }
          style={{ backgroundColor: inputColor }}
          onClick={showColorPicker}
        ></div>
        {isShownColorPicker && <ColorPicker />}
      </label>
    </div>
  );
};

export default InputColorPicker;
