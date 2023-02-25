import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export function Header({ title, hasGoBack = true }) {
  return (
    <View style={styles.container}>
      {hasGoBack ? (
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="ios-arrow-back" size={30} color="#5D5FEF" />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyColumn} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.emptyColumn} />
    </View>
  );
}
