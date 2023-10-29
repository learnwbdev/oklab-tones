import { useCallback, useEffect, useState } from "react";
import { selectPaletteInputColorHex } from "../store/features/palette/paletteBaseColor.slice";
import { useAppSelector } from "../store/store";
import colorApi from "../api/colorApi";
import axios from "axios";

type ColorFormatToType = "rgb" | "oklch" | "lci";

// for "rgb"
export type ColorRgbType = {
  red: number;
  green: number;
  blue: number;
};

// for "oklch" | "lci"
export type ColorLchType = {
  lightness: number;
  chroma: number;
  hue: number;
};

export const useConvertColor = (
  colorFormatTo: ColorFormatToType = "rgb",
  initialState: ColorRgbType | ColorLchType = { red: 0, green: 0, blue: 0 }
) => {
  // цвет из Color Picker или текстового поля
  const inputColor = useAppSelector(selectPaletteInputColorHex);
  const [colorTarget, setColorTarget] = useState<ColorRgbType | ColorLchType>(
    initialState
  );

  // запрос для конвертации цвета
  const fetchColorTarget = useCallback(
    async (inColor: string) => {
      try {
        const response = await colorApi.get(
          `/convert/hex/${colorFormatTo}/${encodeURIComponent(inColor)}`
        );
        setColorTarget(response.data.targetColorComp);
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (axios.isAxiosError(error)) {
          // error.response is undefined
          console.log(`Error: ${error.message}`);
        }
      }
    },
    [colorFormatTo]
  );

  useEffect(() => {
    fetchColorTarget(inputColor);
  }, [inputColor, fetchColorTarget]);

  return colorTarget;
};
