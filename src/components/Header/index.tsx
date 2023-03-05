import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

interface HeaderProps {
  title: string;
  hasGoBack?: boolean;
}

export function Header({ title, hasGoBack = true }: HeaderProps) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {hasGoBack ? (
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="ios-arrow-back" size={30} color="#5D5FEF" />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyColumn} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.emptyColumn} />
    </View>
  );
}
