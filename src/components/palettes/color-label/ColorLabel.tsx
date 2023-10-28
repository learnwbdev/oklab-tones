import styles from "./ColorLabel.module.css";
import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../store/store";
import { selectPaletteSettingsLabel } from "../../../store/features/palette/paletteSettings.slice";
import { selectPaletteTone } from "../../../store/features/palette/palette.slice";

export type ColorLabelProps = {
  tonalRowName: EntityId;
  tone: number;
};

function ColorLabel({ tonalRowName, tone }: ColorLabelProps) {
  // значения цвета для данного оттенка (Tone) в разных цветовых пространствах
  const colorTone = useAppSelector((state) =>
    selectPaletteTone(state, tonalRowName, tone)
  );
  // настройки подписи (отображать оттенок (Tone), значение RGB для цвета в оттенках серого)
  const labelOpt = useAppSelector(selectPaletteSettingsLabel);
  // цвет надписи (светлый для темного цвета, темный - для светлого цвета)
  const isLabelOnBlack = tone <= 50;

  // выбрать значение надписи по настройкам
  const getLabelValue = () => {
    switch (labelOpt) {
      case "tone":
        return tone; // tone
      case "grayRGB":
        return colorTone?.rgbGrayComp; // RGB for gray color
      case "LabL":
        return colorTone?.lightnLab; // Lightness Lab
      case "CamC":
        return colorTone?.chromaCam16; // Chroma CAM16
      case "IptH":
        return colorTone?.hueIpt; // Hue IPT
      default:
        return ""; // без подписи
    }
  };

  const labelText = getLabelValue()?.toString();

  return (
    <span
      className={[styles.color_label, isLabelOnBlack && styles.on_black]
        .filter(Boolean)
        .join(" ")}
    >
      {labelText}
    </span>
  );
}

export default ColorLabel;
