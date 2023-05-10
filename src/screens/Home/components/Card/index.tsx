import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { formatToBrazilianCurrency } from "../../../../utils/currency";

import styles from "./styles";

interface CardProps {
  value: number;
  isActive?: boolean;
  hideBalance: boolean;
  onPress: () => void;
  category: string;
}

export function Card({
  isActive = true,
  onPress,
  value,
  hideBalance,
  category,
}: CardProps) {
  const checkCategory = () => {
    if (category === "food") {
      return "Alimentação";
    } else {
      return "Refeição";
    }
  };

  const checkStatus = () => {
    if (isActive) {
      return (
        <Text style={styles.value}>
          {hideBalance ? "* * *" : formatToBrazilianCurrency(value)}
        </Text>
      );
    } else {
      return <Text style={styles.value}>Bloqueado</Text>;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.description}>
        <Ionicons
          name={isActive ? "cart-outline" : "md-warning-outline"}
          size={24}
          color={isActive ? "#5D5FEF" : "#FFCB09"}
        />
        <Text style={styles.title}>{checkCategory()}</Text>
      </View>
      {checkStatus()}
      <View style={styles.arrowForwardIcon}>
        <Ionicons name="ios-arrow-forward" size={30} color="#5D5FEF" />
      </View>
    </TouchableOpacity>
  );
}
