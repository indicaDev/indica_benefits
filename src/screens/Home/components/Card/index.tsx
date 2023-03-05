import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

interface CardProps {
  title: string;
  value: string;
  isActive?: boolean;
  categoryIcon: keyof typeof Ionicons.glyphMap;
  hideBalance: boolean;
  onPress: () => void;
}

export function Card({
  isActive = true,
  categoryIcon,
  onPress,
  title,
  value,
  hideBalance,
}: CardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.description}>
        <Ionicons
          name={isActive ? categoryIcon : "md-warning-outline"}
          size={24}
          color={isActive ? "#5D5FEF" : "#FFCB09"}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      {isActive ? (
        <Text style={styles.value}>R$ {hideBalance ? "* * *" : value}</Text>
      ) : (
        <Text style={styles.value}>Bloqueado</Text>
      )}
      <View style={styles.arrowForwardIcon}>
        <Ionicons name="ios-arrow-forward" size={30} color="#5D5FEF" />
      </View>
    </TouchableOpacity>
  );
}
