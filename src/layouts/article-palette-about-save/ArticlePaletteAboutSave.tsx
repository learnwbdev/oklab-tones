import { useTranslation } from "react-i18next";

const ArticlePaletteAboutSave = () => {
  const { t } = useTranslation("page-about");

  const linkM3 = "https://m3.material.io/theme-builder#/custom";

  return (
    <article>
      <h2>{t("h2-02")}</h2>
      <p>{t("p-03")}</p>
      <p>
        {t("p-04-1")}{" "}
        <a
          href={linkM3}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("link-m3-label")}
        >
          {t("p-04-2")}
        </a>{" "}
        {t("p-04-3")}{" "}
      </p>
      <p>{t("p-05")}</p>
    </article>
  );
};
export default ArticlePaletteAboutSave;
