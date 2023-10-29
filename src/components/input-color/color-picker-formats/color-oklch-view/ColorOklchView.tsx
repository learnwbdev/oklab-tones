import { useId } from "react";
import { useTranslation } from "react-i18next";
import FormatRow from "../format-row";
import { useConvertColor } from "../../../..";
import { ColorLchType } from "../../../../hooks/useConvertColor";

interface ColorOklch {
  [key: string]: number;
}

const ColorOklchView = () => {
  const { t } = useTranslation("page-home");
  // сформировать id для строк данного формата
  const idColorRow = useId();
  // конвертация цвета в Oklch формат
  const { lightness, chroma, hue } = useConvertColor("oklch", {
    lightness: 0,
    chroma: 0,
    hue: 0,
  }) as ColorLchType;

  const colorOklch: ColorOklch = { l: lightness, c: chroma, h: hue };
  const colorOklchKeys = Object.keys(colorOklch);
  const colorOklchRows = colorOklchKeys.map((key) => (
    <FormatRow
      key={key}
      rowId={idColorRow}
      rowKey={key}
      rowValue={colorOklch[key]}
      rowTitle={t(`oklch-${key}-title`)}
    />
  ));

  return <>{colorOklchRows}</>;
};

export default ColorOklchView;
