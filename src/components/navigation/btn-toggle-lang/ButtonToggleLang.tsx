import styles from "./ButtonToggleLang.module.css";
import stylesBtn from "../../styles/ButtonRound/ButtonRound.module.css";
import { useTranslation } from "react-i18next";
import {
  toggleLang,
  selectLang,
} from "../../../store/features/lang/lang.slice";
import { useAppSelector, useAppDispatch } from "../../../store/store";
import { useCallback, useEffect } from "react";

const ButtonToggleLang = ({
  isShownMdScreen,
}: {
  isShownMdScreen?: boolean;
}) => {
  const { t, i18n } = useTranslation("");
  const lang = useAppSelector(selectLang);
  const dispatch = useAppDispatch();

  const changeLang = useCallback(
    (lang: "EN" | "RU") => {
      i18n.changeLanguage(lang.toLowerCase()); // смена языка
    },
    [i18n]
  );

  useEffect(() => {
    changeLang(lang); // смена языка
    localStorage.setItem("lang", lang);
  }, [lang, changeLang]);

  return (
    <button
      type="button"
      className={[
        stylesBtn.btn_round,
        isShownMdScreen ? "" : stylesBtn.hide_md_screen,
        styles.btn_lang,
      ].join(" ")}
      aria-label={t("btn-change-lang-label")}
      onClick={() => {
        dispatch(toggleLang());
      }}
    >
      {lang === "EN" ? <span>EN</span> : <span>RU</span>}
    </button>
  );
};
export default ButtonToggleLang;
