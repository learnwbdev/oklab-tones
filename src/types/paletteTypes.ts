type SingleToneType = {
  tone: number;
  colorHex: string;
  colorOklch: number[];
  colorHexGray: string;
  rgbGrayComp: number;
  lightnLab: number;
  chromaCam16: number;
  hueIpt: number;
};
export type TonalRowType = SingleToneType[];
export type NamedTonalRowType = {
  name: string;
  tonalRow: TonalRowType;
};

export const LabelType = [
  "tone", // оттенок (Tone в HCT, округленное значение L в Lab)
  "grayRGB", // компонент RGB (одно из значений R, G, B) для цвета в оттенках серого, R=G=B (= Y в XYZ)
  "LabL", // светлота (lightness) для Lab
  "CamC", // хрома (chroma) для CAM16
  "IptH", // тон (hue) для IPT
  "", // без подписи
] as const;
export type LabelType = (typeof LabelType)[number];
