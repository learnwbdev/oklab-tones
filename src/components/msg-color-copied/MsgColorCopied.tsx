import { selectPaletteCopiedColor } from "../../store/features/palette/paletteActions.slice";
import { useAppSelector } from "../../store/store";
import MsgBox from "./msg-box";

const MsgColorCopied = () => {
  // статус, что цвет был скопирован
  const { isColorCopied } = useAppSelector(selectPaletteCopiedColor);

  return <>{isColorCopied && <MsgBox />}</>;
};

export default MsgColorCopied;
