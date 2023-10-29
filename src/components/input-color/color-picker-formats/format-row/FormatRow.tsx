import styles from "./FormatRow.module.css";

type FormatRowProps = {
  rowId: string;
  rowKey: string | number;
  rowValue: number;
  rowTitle: string;
  rowText?: string;
};

const FormatRow = ({
  rowId,
  rowKey,
  rowValue,
  rowTitle,
  rowText,
}: FormatRowProps) => {
  return (
    <div className={styles.format_row} key={rowKey}>
      <label
        className={styles.format_label}
        htmlFor={`${rowId}-${rowKey}`}
        title={rowTitle}
      >
        {rowKey}
      </label>
      <input
        className={styles.format_value}
        type="text"
        id={`${rowId}-${rowKey}`}
        value={rowValue}
        disabled
      />
      {rowText && <p>{rowText}</p>}
    </div>
  );
};
export default FormatRow;
