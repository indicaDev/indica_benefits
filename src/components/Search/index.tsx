import { Ionicons } from "@expo/vector-icons";
import { TextInput, TextInputProps, View } from "react-native";

import styles from "./styles";

export function Search({ ...rest }: TextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput {...rest} style={styles.textInput} />
      <View>
        <Ionicons name="ios-search-outline" size={24} color="#C4C4C4" />
      </View>
    </View>
  );
}
