import { MotiView } from "moti";
import { _colors, pinSize } from "../../constant";
import { StyleSheet } from "react-native";
export interface DigitProps {
  isSelected: boolean;
}
export function Digit({ isSelected }: DigitProps) {
  return (
    <MotiView
      style={styles.container}
      transition={{
        type: "timing",
        duration: 200,
      }}
      animate={{
        height: isSelected ? pinSize : 2,
        marginBottom: isSelected ? pinSize / 2 : 0,
        backgroundColor: isSelected ? _colors.primary : `${_colors.primary}66`,
      }}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    width: pinSize,
    borderRadius: pinSize,
  },
});
