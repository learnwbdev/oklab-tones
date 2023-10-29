import { ChangeEvent, useId, useState } from "react";
import styles from "./ColorPickerFormats.module.css";
import { useTranslation } from "react-i18next";
import ColorRgbView from "./color-rgb-view/ColorRgbView";
import ColorOklchView from "./color-oklch-view/ColorOklchView";
import ColorIptCamView from "./color-ipt-cam-view/ColorIptCamView";
import ColorSwatchView from "./color-swatch/ColorSwatch";

interface FormatViews {
  [key: string]: {
    name: string;
    form: JSX.Element;
  };
}

const ColorPickerFormats = () => {
  const { t } = useTranslation("page-main");
  const [selectedIdFormat, setSelectedIdFormat] = useState(0);
  const selectColorFormatId = useId();

  const formatViews: FormatViews = {
    rgb: { name: "RGB", form: <ColorRgbView /> },
    oklch: { name: "Oklch", form: <ColorOklchView /> },
    LabIptCam: {
      name: "LCI",
      form: <ColorIptCamView />,
    },
    swatch: {
      name: "",
      form: <ColorSwatchView />,
    },
  };
  const colorFormats = Object.keys(formatViews);

  // переход к следующему формату по кругу
  const goToNextOption = () => {
    setSelectedIdFormat((prev) => (prev + 1) % colorFormats.length);
  };

  const changeDisplayFormat = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedIdFormat(colorFormats.indexOf(newValue));
  };

  // опции выбора для форматов
  const formatOpts = colorFormats.map((key) => (
    <option key={key} value={key}>
      {t(`color-picker-${key}`)}
    </option>
  ));

  return (
    <div className={styles.color_formats}>
      <label htmlFor={selectColorFormatId} onClick={goToNextOption}>
        &#60; &#62; &nbsp; {formatViews[colorFormats[selectedIdFormat]].name}
      </label>
      <select
        id={selectColorFormatId}
        onChange={changeDisplayFormat}
        defaultValue={colorFormats[selectedIdFormat]}
      >
        {formatOpts}
      </select>
      {formatViews[colorFormats[selectedIdFormat]].form}
    </div>
  );
};
export default ColorPickerFormats;
