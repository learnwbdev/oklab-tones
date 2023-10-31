import { useTranslation } from "react-i18next";
import {
  ChromaScaleSvg,
  HueColorWheelSvg,
  LightnScaleSvg,
} from "../../components/svg-images";
import styles from "./ArticlePaletteAboutCreate.module.css";

const ArticlePaletteAboutCreate = () => {
  const { t } = useTranslation("page-about");

  return (
    <article>
      <h2>{t("h2-03")}</h2>
      <p>{t("p-06")}</p>
      <p>{t("p-07")}</p>
      <div className={styles.color_comp_about}>
        <HueColorWheelSvg />
        <div>
          <p>
            <b>{t("p-hue-1")}</b>
          </p>
          <p>{t("p-hue-2")}</p>
        </div>
        <ChromaScaleSvg />
        <div>
          <p>
            <b>{t("p-chroma-1")}</b>
          </p>
          <p>{t("p-chroma-2")}</p>
        </div>
        <LightnScaleSvg />
        <div>
          <p>
            <b>{t("p-lightn-1")}</b>
          </p>
          <p>{t("p-lightn-2")}</p>
        </div>
      </div>
    </article>
  );
};
export default ArticlePaletteAboutCreate;
