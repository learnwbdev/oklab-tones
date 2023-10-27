import styles from "./ButtonNavMenu.module.css";
import stylesBtn from "../../styles/ButtonRound/ButtonRound.module.css";
import { TbMenu2 as IconMenu, TbX as IconClose } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction } from "react";

type ButtonNavMenuProps = {
  isNavMenu: boolean;
  setIsNavMenu: Dispatch<SetStateAction<boolean>>;
};

const ButtonNavMenu = ({ isNavMenu, setIsNavMenu }: ButtonNavMenuProps) => {
  const { t } = useTranslation("common");

  return (
    <button
      className={[
        stylesBtn.btn_round,
        stylesBtn.hide_lg_screen,
        styles.btn,
      ].join(" ")}
      type="button"
      aria-label={
        isNavMenu ? t("nav-menu-close-label") : t("nav-menu-open-label")
      }
      onClick={() => setIsNavMenu(!isNavMenu)}
    >
      {isNavMenu ? (
        <IconClose className={styles.nav__icon_close} />
      ) : (
        <IconMenu className={styles.nav__icon_menu} />
      )}
    </button>
  );
};
export default ButtonNavMenu;
