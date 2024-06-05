import { FlatList, ListRenderItem } from "react-native";
import { dialPad, _spacing } from "./../../constant";
import { useCallback } from "react";
import { DialPadItem } from "./DialPadItem";
interface DialPadProps {
  onPress: (item: (typeof dialPad)[number]) => void;
}
export function DialPad({ onPress }: DialPadProps) {
  const renderItem: ListRenderItem<string | number> = useCallback(
    ({ item }) => <DialPadItem item={item} onPress={onPress} />,
    [onPress],
  );

  return (
    <FlatList
      numColumns={3}
      data={dialPad}
      style={{ flexGrow: 0 }}
      columnWrapperStyle={{ gap: _spacing }}
      contentContainerStyle={{ gap: _spacing }}
      scrollEnabled={false}
      keyExtractor={(item, index) => String(index)}
      renderItem={renderItem}
    />
  );
}
