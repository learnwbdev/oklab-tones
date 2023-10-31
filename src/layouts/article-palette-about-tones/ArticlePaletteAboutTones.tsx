import { useTranslation } from "react-i18next";
import styles from "./ArticlePaletteAboutTones.module.css";

const ArticlePaletteAboutTones = () => {
  const { t } = useTranslation("page-about");

  return (
    <article>
      <h2>{t("h2-01")}</h2>
      <p>{t("p-02")}</p>
      <ul className={styles.list}>
        <li>{t("li-01")}</li>
        <li>{t("li-02")}</li>
        <li>{t("li-03")}</li>
        <li>{t("li-04")}</li>
        <li>{t("li-05")}</li>
        <li>
          {t("li-06")} (<i>{t("li-06-add")}</i>)
        </li>
      </ul>
    </article>
  );
};
export default ArticlePaletteAboutTones;
