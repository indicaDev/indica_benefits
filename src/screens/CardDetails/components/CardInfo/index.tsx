import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

interface CardInfoProps {
  card: {
    id: string;
    category: string;
    cardNumber: string;
    value: string;
    status: boolean;
  };
}

export function CardInfo({ card }: CardInfoProps) {
  return (
    <View style={styles.info}>
      <Text style={styles.category}>{card.category}</Text>
      <Text style={styles.cardNumber}>Final {card.cardNumber}</Text>
      <Text style={styles.value}>R$ {card.value}</Text>
      <Text
        style={[
          styles.status,
          card.status ? styles.statusActive : styles.statusDisabled,
        ]}
      >
        {card.status ? "Ativado" : "Bloqueado"}
      </Text>
      <TouchableOpacity style={styles.movementsButton}>
        <Text style={styles.movementsButtonTitle}>Movimentações</Text>
        <Ionicons name="ios-arrow-forward" size={30} color="#5D5FEF" />
      </TouchableOpacity>
    </View>
  );
}
