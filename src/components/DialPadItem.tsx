import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, Vibration } from "react-native";
import { _colors, dialPadSize, dialPadTextSize } from "../../constant";
export interface DialPadItemProps {
  onPress: (item: string | number) => void;
  item: string | number;
}
const ONE_SECOND_IN_MS = 1000;
export const DialPadItem = ({ onPress, item }: DialPadItemProps) => {
  const isEmptyButton = item === "";
  const isDelButton = item === "del";
  const isNumberButton = typeof item === "number";
  return (
    <TouchableOpacity
      disabled={isEmptyButton}
      accessible={!isEmptyButton}
      onPress={() => {
        Vibration.vibrate(ONE_SECOND_IN_MS * 0.05);
        onPress(item);
      }}
      style={[styles.wrapper, { borderWidth: isNumberButton ? 1 : 0 }]}
    >
      {isDelButton ? (
        <Ionicons
          name="backspace-outline"
          color={_colors.secondary}
          size={dialPadTextSize}
        />
      ) : (
        <Text style={styles.text}>{item}</Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: dialPadTextSize,
    color: _colors.secondary,
  },
  wrapper: {
    width: dialPadSize,
    height: dialPadSize,
    borderRadius: dialPadSize,
    borderColor: _colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
});
