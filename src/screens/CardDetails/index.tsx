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

  return (
    <View style={styles.container}>
      <Header title="Detalhes" />

      <View style={styles.infoBackground}>
        <CardInfo />
      </View>
    </View>
  );
}
