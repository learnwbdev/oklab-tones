import { useTranslation } from "react-i18next";
import colorApi from "../../api/colorApi";
import { selectPaletteBaseColorHex } from "../../store/features/palette/paletteBaseColor.slice";
import { useAppSelector } from "../../store/store";
import styles from "./ButtonSavePalette.module.css";
import axios from "axios";
import { useCallback } from "react";

const ButtonSavePalette = () => {
  const { t } = useTranslation("page-home");
  const colorBaseHex = useAppSelector(selectPaletteBaseColorHex);

  // загрузка файла с цветами палитры для текущего базового цвета
  const memoSavePaletteToFile = useCallback(async (colorBase: string) => {
    try {
      // сохранить текущее значение базового цвета
      const coloBaseHexFile = colorBase;
      // ответ содержит файл
      const response = await colorApi.get(
        `/palette/hex/${encodeURIComponent(coloBaseHexFile)}/download`
      );

      // загрузка файла
      const tempUrl = window.URL.createObjectURL(
        new Blob([response.data], { type: "text/css" })
      );
      // создание временной ссылки
      const tempLink = document.createElement("a");
      tempLink.href = tempUrl;
      tempLink.style.display = "none";
      // имя файла для загружаемого файла
      tempLink.download = `palette-${coloBaseHexFile.replace("#", "")}.css`;
      document.body.appendChild(tempLink);
      tempLink.click();
      // удаление временной ссылки
      document.body.removeChild(tempLink);
      window.URL.revokeObjectURL(tempUrl);
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (axios.isAxiosError(error)) {
        // error.response is undefined
        console.log(`Error with file download: ${error.message}`);
      }
    }
  }, []);

  return (
    <button
      className={styles.btn_save_palette}
      type="button"
      title={t("btn-export-title")}
      onClick={() => memoSavePaletteToFile(colorBaseHex)}
    >
      {t("btn-export-label")}
    </button>
  );
};
export default ButtonSavePalette;
