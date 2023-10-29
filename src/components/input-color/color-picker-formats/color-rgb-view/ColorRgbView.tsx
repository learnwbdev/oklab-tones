import { useId } from "react";
import { useTranslation } from "react-i18next";
import FormatRow from "../format-row";
import { useConvertColor } from "../../../..";
import { ColorRgbType } from "../../../../hooks/useConvertColor";

interface ColorRgb {
  [key: string]: number;
}

const ColorRgbView = () => {
  const { t } = useTranslation("page-home");
  // сформировать id для строк данного формата
  const idColorRow = useId();
  // конвертация цвета в RGB формат
  const { red, green, blue } = useConvertColor("rgb", {
    red: 0,
    green: 0,
    blue: 0,
  }) as ColorRgbType;

  const colorRgb: ColorRgb = { r: red, g: green, b: blue };
  const colorRgbKeys = Object.keys(colorRgb);
  const colorRgbRows = colorRgbKeys.map((key) => (
    <FormatRow
      key={key}
      rowId={idColorRow}
      rowKey={key}
      rowValue={colorRgb[key]}
      rowTitle={t(`rgb-${key}-title`)}
    />
  ));

  return <>{colorRgbRows}</>;
};

export default ColorRgbView;
