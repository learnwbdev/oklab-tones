import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  selectPaletteCopiedColor,
  setCopiedColor,
} from "../../../store/features/palette/paletteActions.slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import styles from "./MsgBox.module.css";

const MsgBox = () => {
  // переводы на другой язык
  const { t } = useTranslation("page-home");
  // значение цвета, к-ый был скопирован; предыдущий скопированный цвет
  const { colorCopiedValueHexCurr } = useAppSelector(selectPaletteCopiedColor);
  // для сброса статуса "цвет скопирован"
  const dispatch = useAppDispatch();
  // интервал времени отображения сообщения (мс)
  const timeoutDur = 2000;
  // длительность анимации (мс)
  const animationDur = 500;
  // класс для анимации
  const [msgAddlClass, setMsgAddlClass] = useState("");
  // время, когда можно выполнять отложенную функцию
  const [timeHideMsg, setTimeHideMsg] = useState(Date.now());

  useEffect(() => {
    // изменить время скрытия сообщения
    setTimeHideMsg(Date.now() + timeoutDur);
  }, [colorCopiedValueHexCurr]);

  useEffect(() => {
    // выставить класс для анимации в начале отображения сообщения
    setMsgAddlClass(styles.msg_show);

    const timeoutAnimHide = () => {
      // не выполнять, если было продлено отображение сообщения
      if (Date.now() < timeHideMsg - animationDur) return;

      // класс для анимации для скрытия сообщения перед его удалением из DOM
      setMsgAddlClass(styles.msg_hide);
    };

    // функция для сброса статуса "цвет скопирован"
    const timeoutStateChange = () => {
      // не выполнять, если было продлено отображение сообщения
      if (Date.now() < timeHideMsg) return;

      // сбросить статус для скопированного цвета (уже сообщение было отображено)
      dispatch(
        setCopiedColor({
          isColorCopied: false,
          colorCopiedValueHex: "",
        })
      );
    };

    // отложенное выполнение анимации для скрытия сообщения
    const timeoutIdAnim = setTimeout(
      timeoutAnimHide,
      timeoutDur - animationDur // время раньше на длину анимации, чтобы успела отобразиться анимация
    );
    // отложенное выполнение функции сброса статуса "цвет скопирован" (сообщение будет удалено из DOM)
    const timeoutIdState = setTimeout(timeoutStateChange, timeoutDur);

    return () => {
      clearTimeout(timeoutIdAnim);
      clearTimeout(timeoutIdState);
    };
  }, [dispatch, colorCopiedValueHexCurr, timeHideMsg]);

  return (
    <div className={`${styles.msg_color_copied} ${msgAddlClass}`}>{`${t(
      "color-copied-text"
    )}: ${colorCopiedValueHexCurr}`}</div>
  );
};
export default MsgBox;
