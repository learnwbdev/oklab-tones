import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("page-about");

  return (
    <main>
      <h1>{t("page-h1")}</h1>
    </main>
  );
};

export default AboutPage;
