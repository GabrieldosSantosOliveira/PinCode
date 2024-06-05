import "react-native-reanimated";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { _spacing, pinLength, pinSize, pinSpacing } from "./constant";
import { DialPad } from "./src/components/DialPad";
import { Digit } from "./src/components/Digit";

export default function App() {
  const [code, setCode] = useState<number[]>([]);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {[...Array(pinLength).keys()].map((index) => {
          const isSelected = typeof code[index] === "number";
          return <Digit isSelected={isSelected} key={`pin-${index}`} />;
        })}
      </View>
      <DialPad
        onPress={(item) => {
          if (item === "del") {
            setCode((prevCode) => prevCode.slice(0, prevCode.length - 1));
          } else if (typeof item === "number" && code.length < pinLength) {
            setCode((prevCode) => [...prevCode, item]);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flexDirection: "row",
    gap: pinSpacing * 2,
    marginBottom: _spacing * 2,
    height: pinSize * 2,
    alignItems: "flex-end",
  },
});
