import { useTranslation } from "react-i18next";
import { MsgColorCopied, TonalRow, useUpdatePalette } from "../../index.ts";
import { selectTonalRowsNames } from "../../store/features/palette/palette.slice.ts";
import { useAppSelector } from "../../store/store.ts";
import styles from "./SectionPalettes.module.css";

const SectionPalettes = () => {
  const { t } = useTranslation("page-home");
  const tonalRowsNames = useAppSelector(selectTonalRowsNames);

  // обновление палитры при изменении базового цвета (по умолчанию: при частом изменении - только каждые 100м)
  useUpdatePalette(300);

  const palettesComp = tonalRowsNames.map((tonalRowName) => (
    <div key={tonalRowName} className={styles.palette}>
      <h2>{t(`tonal-row-${tonalRowName}-label`)}</h2>
      <TonalRow tonalRowName={tonalRowName} />
    </div>
  ));

  return (
    <>
      {palettesComp}
      {/* Всплывающее сообщение, что цвет скопирован */}
      <MsgColorCopied />
    </>
  );
};
export default SectionPalettes;
