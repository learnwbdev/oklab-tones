import { EntityId } from "@reduxjs/toolkit";
import { selectPaletteTone } from "../../../store/features/palette/palette.slice";
import { setCopiedColor } from "../../../store/features/palette/paletteActions.slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import ColorLabel from "../color-label/ColorLabel";
import styles from "./ColorItem.module.css";
import { useTranslation } from "react-i18next";

export type ColorItemProps = {
  tonalRowName: EntityId;
  tone: number;
};

const ColorItem = ({ tonalRowName, tone }: ColorItemProps) => {
  const { t } = useTranslation("page-home");

  // выбрать оттенок
  const colorTone = useAppSelector((state) =>
    selectPaletteTone(state, tonalRowName, tone)
  );
  const dispatch = useAppDispatch();

  // сформировать текст всплывающей подсказки
  const title =
    ` ${colorTone?.colorHex} - ${t("tone-name")} ${tone} \n` +
    ` Oklch:  ${colorTone?.colorOklch.join("   ")} \n`;

  const copyColorToClipboard = () => {
    // добавлние цвета в буфер обмена
    navigator.clipboard.writeText(`${colorTone?.colorHex}`);
    // изменение статуса "цвет скопирован"
    dispatch(
      setCopiedColor({
        isColorCopied: true,
        colorCopiedValueHex: colorTone?.colorHex || "",
      })
    );
  };

  return (
    <div
      className={styles.color_item}
      title={title}
      aria-label={`colorHex: ${title}`}
      style={{ backgroundColor: colorTone?.colorHex }}
      onClick={copyColorToClipboard}
    >
      <ColorLabel tonalRowName={tonalRowName} tone={tone} />
    </div>
  );
};

export default ColorItem;
