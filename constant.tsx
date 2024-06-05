import randomColor from "randomcolor";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"];
export const dialPadSize = width * 0.2;
export const dialPadTextSize = dialPadSize * 0.4;

export const _spacing = 20;

export const pinLength = 4;
export const pinContainerSize = width / 2;
export const pinMaxSize = pinContainerSize / pinLength;
export const pinSpacing = 10;
export const pinSize = pinMaxSize - pinSpacing * 2;
export const baseColor = randomColor();
export const _colors = {
  primary: baseColor,
  secondary: randomColor({
    hue: baseColor,
    luminosity: "dark",
  }),
};
