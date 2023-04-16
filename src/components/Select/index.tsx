import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import RNPickerSelect, { PickerSelectProps } from "react-native-picker-select";

type SelectProps = PickerSelectProps & {
  name: string;
};

import styles from "./styles";

export function Select({
  name,
  items,
  onValueChange,
  placeholder,
  ...rest
}: SelectProps) {
  const renderIcon = () => {
    return <Ionicons name="chevron-down-outline" size={30} color="#5D5FEf" />;
  };

  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.search}>
        <RNPickerSelect
          {...rest}
          onValueChange={onValueChange}
          items={items}
          placeholder={{ label: placeholder, value: null }}
          Icon={renderIcon as any}
          style={styles}
        />
      </View>
    </View>
  );
}
