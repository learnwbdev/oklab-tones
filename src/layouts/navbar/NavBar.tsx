import {
  ButtonNavMenu,
  ButtonToggleLang,
  ButtonToggleTheme,
  LinksNavTop,
  useMediaQuery,
} from "../..";
import styles from "./NavBar.module.css";
import Logo from "../../components/logo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation("common");
  const [isNavMenu, setIsNavMenu] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  // сброс отображения навигационного меню для малых экранов, если экран стал большим
  useEffect(() => {
    if (isLargeScreen) setIsNavMenu(false);
  }, [isLargeScreen]);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div
        className={
          isNavMenu
            ? [styles.nav_menu, styles.active_menu].join(" ")
            : styles.nav_menu
        }
      >
        <LinksNavTop />
        {/* открытое меню для мобильных устройств */}
        {isNavMenu && (
          <div className={styles.divider}>
            <div className={styles.nav_menu_lang}>
              <span>{t("toggle-lang-label")}</span>
              <ButtonToggleLang isShownMdScreen={true} />
            </div>
          </div>
        )}
      </div>
      {/* кнопки для версии с большим экраном */}
      <div className={styles.nav_btns}>
        <ButtonToggleTheme />
        <ButtonToggleLang />
        <ButtonNavMenu isNavMenu={isNavMenu} setIsNavMenu={setIsNavMenu} />
      </div>
      {/* overlay когда открыто меню для мобильной версии */}
      {isNavMenu && (
        <div
          onClick={() => setIsNavMenu(false)}
          className={styles.overlay}
        ></div>
      )}
    </div>
  );
};

export default NavBar;
