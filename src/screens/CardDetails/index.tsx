import { Text, TouchableOpacity, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { Header } from "../../components/Header";

import styles from "./styles";
import { CardInfo } from "./components/CardInfo";

interface CardDetailsParams {
  cardId: string;
}

export function CardDetails() {
  const route = useRoute();

  const { cardId } = route.params as CardDetailsParams;

  const card = {
    id: cardId,
    category: "Alimentação",
    cardNumber: "3873",
    value: "400,50",
    status: true,
  };

  return (
    <View style={styles.container}>
      <Header title="Detalhes" />

      <View style={styles.infoBackground}>
        <CardInfo card={card} />
      </View>
    </View>
  );
}
