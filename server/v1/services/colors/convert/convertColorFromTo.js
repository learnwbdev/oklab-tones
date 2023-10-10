// Uniform one-step conversion function

/**
 * @param colorToConvert {string | number[]} - color to convert
 * @param colorSpaceFrom {string} - color space/format to convert from
 * @param colorSpaceTo {string}   - color space/format to convert to
 * @return {string | number[] | undefined} - converted color
 */

import { colorSpaces } from "./colorSpaces.js";
import { convertHexToSRgb } from "./oneStepConversions/RGB/convertHexToSRgb.js";
import { convertSRgbToLnSRgb } from "./oneStepConversions/RGB/convertSRgbToLnSRgb.js";
import { convertLnSRgbToOklab } from "./oneStepConversions/RGB/convertLnSRgbToOklab.js";
import { convertOklabToOklch } from "./oneStepConversions/Oklab/convertOklabToOklch.js";
import { convertOklchToOklab } from "./oneStepConversions/Oklab/convertOklchToOklab.js";
import { convertOklabToLnSRgb } from "./oneStepConversions/Oklab/convertOklabToLnSRgb.js";
import { convertLnSRgbToSRgb } from "./oneStepConversions/RGB/convertLnSRgbToSRgb.js";
import { convertSRgbToHex } from "./oneStepConversions/RGB/convertSRgbToHex.js";
import { convertLnSRgbToXyz } from "./oneStepConversions/RGB/convertLnSRgbToXyz.js";
import { convertXyzToLab } from "./oneStepConversions/XYZ/convertXyzToLab.js";
import { convertLabToLch } from "./oneStepConversions/Lab/convertLabToLch.js";
import { convertLchToLab } from "./oneStepConversions/Lab/convertLchToLab.js";
import { convertLabToXyz } from "./oneStepConversions/Lab/convertLabToXyz.js";
import { convertXyzToLnSRgb } from "./oneStepConversions/XYZ/convertXyzToLnSRgb.js";
import { convertXyzToOklab } from "./oneStepConversions/XYZ/convertXyzToOklab.js";
import { convertOklabToXyz } from "./oneStepConversions/Oklab/convertOklabToXyz.js";

export function convertColorFromTo(colorToConvert, colorSpaceFrom, colorSpaceTo) {
  return ( colorSpaceFrom === colorSpaces.Hex && colorSpaceTo === colorSpaces.sRgb) ?
             convertHexToSRgb(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.sRgb && colorSpaceTo === colorSpaces.linSRgb) ?
             convertSRgbToLnSRgb(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.linSRgb && colorSpaceTo === colorSpaces.Oklab) ?
             convertLnSRgbToOklab(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.Oklab && colorSpaceTo === colorSpaces.Oklch) ?
             convertOklabToOklch(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.Oklch && colorSpaceTo === colorSpaces.Oklab) ?
             convertOklchToOklab(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.Oklab && colorSpaceTo === colorSpaces.linSRgb) ?
             convertOklabToLnSRgb(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.linSRgb && colorSpaceTo === colorSpaces.sRgb) ?
             convertLnSRgbToSRgb(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.sRgb && colorSpaceTo === colorSpaces.Hex) ?
             convertSRgbToHex(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.linSRgb && colorSpaceTo === colorSpaces.XYZ) ?
             convertLnSRgbToXyz(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.XYZ && colorSpaceTo === colorSpaces.Lab) ?
             convertXyzToLab(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.Lab && colorSpaceTo === colorSpaces.Lch) ?
             convertLabToLch(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.Lch && colorSpaceTo === colorSpaces.Lab) ?
             convertLchToLab(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.Lab && colorSpaceTo === colorSpaces.XYZ) ?
             convertLabToXyz(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.XYZ && colorSpaceTo === colorSpaces.linSRgb) ?
             convertXyzToLnSRgb(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.XYZ && colorSpaceTo === colorSpaces.Oklab) ?
             convertXyzToOklab(colorToConvert) :
         ( colorSpaceFrom === colorSpaces.Oklab && colorSpaceTo === colorSpaces.XYZ) ?
             convertOklabToXyz(colorToConvert) :
         [undefined, undefined, undefined];
}