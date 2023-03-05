import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export function CardInfo() {
  return (
    <View style={styles.info}>
      <Text style={styles.category}>Alimentação</Text>
      <Text style={styles.cardNumber}>Final 3873</Text>
      <Text style={styles.value}>R$ 400,50</Text>
      <Text style={styles.status}>Ativado</Text>
      <TouchableOpacity style={styles.movementsButton}>
        <Text style={styles.movementsButtonTitle}>Movimentações</Text>
        <Ionicons name="ios-arrow-forward" size={30} color="#5D5FEF" />
      </TouchableOpacity>
    </View>
  );
}
