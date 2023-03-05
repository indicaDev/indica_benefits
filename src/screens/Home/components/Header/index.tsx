import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.userName}>Olá,{"\n"}Pedro</Text>
      <Ionicons name="notifications" size={30} color="#5D5FEF" />
    </View>
  );
}
