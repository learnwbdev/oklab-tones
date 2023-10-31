import { useTranslation } from "react-i18next";
import styles from "./AboutPage.module.css";
import ArticlePaletteAboutTones from "../../layouts/article-palette-about-tones";
import ArticlePaletteAboutSave from "../../layouts/article-palette-about-save";
import ArticlePaletteAboutCreate from "../../layouts/article-palette-about-create";

const AboutPage = () => {
  const { t } = useTranslation("page-about");

  return (
    <main className={styles.page_about}>
      <h1>{t("page-h1")}</h1>
      <p>{t("p-01")}</p>
      <section className={styles.section_palette_about}>
        <section className={styles.section_tones}>
          <ArticlePaletteAboutTones />
        </section>
        <section className={styles.section_save}>
          <ArticlePaletteAboutSave />
        </section>
        <section className={styles.section_create}>
          <ArticlePaletteAboutCreate />
        </section>
      </section>
    </main>
  );
};

export default AboutPage;
