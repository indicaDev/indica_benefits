import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

import { formatToBrazilianCurrency } from "../../../../utils/currency";
import { returnLastCardNumber } from "../../../../utils/returnLastCardNumber";

import styles from "./styles";

interface CardInfoProps {
  card: {
    id: number;
    category: string;
    number: string;
    value: number;
    status: boolean;
  };
}

export function CardInfo({ card }: CardInfoProps) {
  const navigation = useNavigation();

  const handleMovements = () => {
    navigation.navigate("moviments", {
      cardId: card.id,
    });
  };

  return (
    <View style={styles.info}>
      <Text style={styles.category}>
        {card.category === "food" ? "Alimentação" : "Refeição"}
      </Text>
      <Text style={styles.cardNumber}>
        Final {returnLastCardNumber(Number(card.number))}
      </Text>
      <Text style={styles.value}>
        {formatToBrazilianCurrency(Number(card.value))}
      </Text>
      <Text
        style={[
          styles.status,
          card.status ? styles.statusActive : styles.statusDisabled,
        ]}
      >
        {card.status ? "Ativado" : "Bloqueado"}
      </Text>
      <TouchableOpacity
        style={styles.movementsButton}
        onPress={handleMovements}
      >
        <Text style={styles.movementsButtonTitle}>Movimentações</Text>
        <Ionicons name="ios-arrow-forward" size={30} color="#5D5FEF" />
      </TouchableOpacity>
    </View>
  );
}
