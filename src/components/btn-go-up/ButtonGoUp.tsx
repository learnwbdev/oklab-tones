import styles from "./ButtonGoUp.module.css";
import { TbArrowBarToUp } from "react-icons/tb";
import stylesBtn from "../styles/ButtonRound/ButtonRound.module.css";
// i18next: для отображения текста на разных языках
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const ButtonGoUp = () => {
  // для текст на разных языках
  const { t } = useTranslation("common");
  // статус отображения кнопки
  const [isBtnShown, setIsBtnShown] = useState(false);

  // изменение статуса кнопки в зависимости от положения прокрутки
  const handleBtnVisibility = () => {
    // высота страницы
    const wndHeight = window.innerHeight;
    // позиция прокрутки по вертикали
    const scrollPos = window.scrollY;

    if (scrollPos >= 0.2 * wndHeight) {
      setIsBtnShown(true);
    } else {
      setIsBtnShown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleBtnVisibility);

    return () => window.removeEventListener("scroll", handleBtnVisibility);
  }, []);

  return (
    <button
      type="button"
      className={
        isBtnShown
          ? [stylesBtn.btn_round, styles.btn_go_up].join(" ")
          : [stylesBtn.btn_round, styles.btn_go_up, styles.hidden].join(" ")
      }
      title={t("btn-go-up-title")}
      aria-label={t("btn-go-up-label")}
      onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
    >
      <TbArrowBarToUp className={styles.icon_arrow_up} />
    </button>
  );
};
export default ButtonGoUp;
