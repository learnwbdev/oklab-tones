import styles from "./TonalRow.module.css";
import { EntityId } from "@reduxjs/toolkit";
import ColorItem from "../color-item/ColorItem";
import { useAppSelector } from "../../../store/store";
import { selectTonalRowByName } from "../../../store/features/palette/palette.slice";

export type TonalRowProps = {
  tonalRowName: EntityId;
};

function TonalRow({ tonalRowName }: TonalRowProps) {
  const tonalRow = useAppSelector((state) =>
    selectTonalRowByName(state, tonalRowName)
  );

  const colorItems = tonalRow?.tonalRow
    .toReversed()
    .map(({ tone }) => (
      <ColorItem key={tone} tonalRowName={tonalRowName} tone={tone} />
    ));

  return <div className={styles.tonal_row}>{colorItems}</div>;
}

export default TonalRow;
