import { useId } from "react";
import { useTranslation } from "react-i18next";
import FormatRow from "../format-row";
import { useConvertColor } from "../../../..";
import { ColorLchType } from "../../../../hooks/useConvertColor";

interface ColorLCI {
  [key: string]: number;
}

// для подписей
interface ColorLCIText {
  [key: string]: string;
}

const ColorIptCamView = () => {
  const { t } = useTranslation("page-home");
  // сформировать id для строк данного формата
  const idColorRow = useId();
  // конвертация цвета в смешанный Lci формат (Lab lightness, Cam16 Chroma, IPT Hue)
  const { lightness, chroma, hue } = useConvertColor("lci", {
    lightness: 0,
    chroma: 0,
    hue: 0,
  }) as ColorLchType;

  const colorLCI: ColorLCI = { l: lightness, c: chroma, h: hue };
  const colorLCItext: ColorLCIText = { l: "Lab", c: "Cam16", h: "IPT" };
  const colorLCIKeys = Object.keys(colorLCI);
  const colorLCIRows = colorLCIKeys.map((key) => (
    <FormatRow
      key={key}
      rowId={idColorRow}
      rowKey={key}
      rowValue={colorLCI[key]}
      rowTitle={t(`iptcam-${key}-title`)}
      rowText={colorLCItext[key]}
    />
  ));

  return <>{colorLCIRows}</>;
};

export default ColorIptCamView;
