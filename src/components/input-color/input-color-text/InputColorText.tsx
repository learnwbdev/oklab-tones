import { ChangeEvent, useState } from "react";
import {
  selectPaletteInputColorHex,
  setColorInput,
} from "../../../store/features/palette/paletteBaseColor.slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import styles from "./InputColorText.module.css";

const InputColorText = ({ idLabel }: { idLabel: string }) => {
  // цвет, который вводят в поле ввода
  const [inputTextColor, setInputTextColor] = useState("");
  // true - цвет изменяют в поле ввода; false - цвет изменяют в Color Picker
  const [isChanging, setIsChanging] = useState(false);
  const dispatch = useAppDispatch();
  // текущий цвет из Color Picker
  const inputCPickColor = useAppSelector(selectPaletteInputColorHex);

  // изменение цвета colorInputHex в store при изменении цвета при вводе (при верном формате ывета HEX)
  const onChangeColorHex = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChanging(true); // выставить флаг, что цвет изменяется в поле ввода
    const checkHexFormat = /^#?([0-9a-f]){3}$|^#?([0-9a-f]){6}$/i;
    const currInput = e.target.value;
    // изменить базовый цвет для палитры, если введен верный цвет HEX
    if (checkHexFormat.test(currInput)) {
      dispatch(setColorInput({ colorHex: currInput }));
    }

    // изменить цвет ввода
    setInputTextColor(currInput);
  };

  return (
    <input
      type="text"
      id={idLabel}
      className={styles.input_color_text}
      name="inputTextColorText"
      value={isChanging ? inputTextColor : inputCPickColor}
      onChange={onChangeColorHex}
      onBlur={() => setIsChanging(false)}
      pattern="^#?([0-9a-fA-F]){3}$|^#?([0-9a-fA-F]){6}$"
    />
  );
};

export default InputColorText;
