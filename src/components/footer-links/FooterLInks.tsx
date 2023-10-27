import styles from "./FooterLinks.module.css";
import { useTranslation } from "react-i18next";

const FooterLInks = () => {
  const { t } = useTranslation("common");

  const externLinks = [
    [
      "Material Design 3",
      "https://m3.material.io/",
      t("footer-link-md3-label"),
    ],
    [
      t("footer-link-oklab-link"),
      "https://bottosson.github.io/posts/oklab/",
      t("footer-link-oklab-label"),
    ],
  ];

  const links = externLinks.map(([text, link, label], idx) => (
    <li className={styles.footer_link} key={idx}>
      <a
        href={link}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </li>
  ));

  return (
    <>
      <div className={styles.footer_links_title}>{t("footer-links-title")}</div>
      <ul className={styles.footer_list}>{links}</ul>
    </>
  );
};
export default FooterLInks;
