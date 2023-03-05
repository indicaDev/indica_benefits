import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export function Card() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.description}>
        <Ionicons name="cart-outline" size={24} color="#5D5FEF" />
        <Text style={styles.title}>Alimentação</Text>
      </View>
      <Text style={styles.value}>R$ 400,50</Text>
      <View style={styles.arrowForwardIcon}>
        <Ionicons name="ios-arrow-forward" size={30} color="#5D5FEF" />
      </View>
    </TouchableOpacity>
  );
}
