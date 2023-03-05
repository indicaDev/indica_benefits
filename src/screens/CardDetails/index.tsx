import { Text, TouchableOpacity, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { Header } from "../../components/Header";

import styles from "./styles";

interface CardDetailsParams {
  cardId: string;
}

export function CardDetails() {
  const route = useRoute();

  const { cardId } = route.params as CardDetailsParams;

  return (
    <View style={styles.container}>
      <Header title="Detalhes" />

      <View style={styles.infoBackground}>
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
      </View>
    </View>
  );
}
