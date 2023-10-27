import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";

const Header = () => {
  const { t } = useTranslation("page-home");

  return (
    <header className={styles.header_pghome}>
      <h1>OklabTones</h1>
      <p className={styles.header_minor}>{t("header-text")}</p>
    </header>
  );
};
export default Header;
