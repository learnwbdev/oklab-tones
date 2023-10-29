import styles from "./SectionInputColor.module.css";
import { useId } from "react";
import { useTranslation } from "react-i18next";
import { InputColorPicker, InputColorText } from "../..";

const SectionInputColor = () => {
  const idInputColorText = useId(); // id для label
  const { t } = useTranslation("page-home"); // перевод для label

  return (
    <div className={styles.input_color_cont}>
      <label htmlFor={idInputColorText}>{t("input-color-label")}</label>
      <div className={styles.color_inputs}>
        <InputColorText idLabel={idInputColorText} />
        <InputColorPicker />
      </div>
    </div>
  );
};
export default SectionInputColor;
