import { Text, TouchableOpacity } from "react-native";

import { ActivityIndicator } from "../ActivityIndicator";

import styles from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
}

export function Button({ isLoading, title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
