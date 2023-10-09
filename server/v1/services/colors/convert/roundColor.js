/**
 * Round color to specified precision
 * @param {number[] | string} colorOrg - original color to round up
 * @param {string} colorSpaceTo - name of the color space of the color colorOrg
 * @param {boolean} [isRound = true] - flag to round the converted color
 * @param {number} [mpPrcSRgb = 0] as 0..17 (integer) - precision for r, g, b in sRGB color (red, green and blue color components)
 * @return {number[] | string | undefined[]} rounded color
 */

import { colorSpaces } from "./colorSpaces.js";
import { roundColorSRgb } from "./rounding/roundColorSRgb.js";

export function roundColor(colorOrg, colorSpace, {isRound = true, mpPrcSRgb = 0} = {}) {
    return !isRound ? colorOrg : // no need to round color values if isRound = false
        colorSpace === colorSpaces.sRgb ? roundColorSRgb(colorOrg,  {mpPrcSRgb: mpPrcSRgb}) :
        colorOrg; // for other color spaces - no rounding
}