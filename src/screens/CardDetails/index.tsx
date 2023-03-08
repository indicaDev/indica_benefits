import { Alert, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { CardInfo } from "./components/CardInfo";
import { ActionCard } from "./components/ActionCard";

import styles from "./styles";

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
    status: false,
  };

  const handleToggleCard = () => {
    Alert.alert("Alteração de statuso no cartão");
  }

  return (
    <View style={styles.container}>
      <Header title="Detalhes" />

      <View style={styles.infoBackground}>
        <CardInfo card={card} />
      </View>

      <View style={styles.actionCard}>
        <ActionCard icon="lock-closed" title="Bloquear" isActive={card.status} onPress={handleToggleCard} />
        <ActionCard icon="lock-open" title="Desbloquear" isActive={!card.status} onPress={handleToggleCard} />
      </View>
    </View>
  );
}
