// icons
import { TbMoon, TbSun } from "react-icons/tb";
// redux-toolkit
import {
  toggleTheme,
  selectTheme,
} from "../../../store/features/theme/theme.slice";
import { useAppSelector, useAppDispatch } from "../../../store/store";
// i18next: для отображения текста на разных языках
import { useTranslation } from "react-i18next";
import styles from "./ButtonToggleTheme.module.css";
import stylesBtn from "../../styles/ButtonRound/ButtonRound.module.css";

import { useEffect } from "react";

const ButtonToggleTheme = () => {
  // для текст на разных языках
  const { t } = useTranslation("common");
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      className={stylesBtn.btn_round}
      title={t("toggle-theme-btn-title")}
      aria-label={
        theme === "dark"
          ? t("toggle-theme-btn-to-light-label")
          : t("toggle-theme-btn-to-dark-label")
      }
      aria-live="polite"
      onClick={() => dispatch(toggleTheme())}
    >
      {theme === "dark" ? (
        <TbSun className={styles.sun} />
      ) : (
        <TbMoon className={styles.moon} />
      )}
    </button>
  );
};

export default ButtonToggleTheme;
