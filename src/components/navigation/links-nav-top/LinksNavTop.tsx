import styles from "./LinksNavTop.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LinksNavTop = () => {
  const { t } = useTranslation("common");

  const linksNavTop = [
    { urlTo: "/", title: t("nav-link-home") },
    { urlTo: "/about", title: t("nav-link-about") },
  ];

  return (
    <nav aria-label={t("nav-main-label")}>
      <ul className={styles.nav_links}>
        {linksNavTop.map(({ urlTo, title }, idx) => (
          <li key={idx}>
            <Link to={urlTo}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LinksNavTop;
