import { Text, View } from "react-native";

import { MovimentsData } from "../..";

interface MovimentItemProps {
  item: MovimentsData;
}

import styles from "./styles";

export function MovimentItem({ item }: MovimentItemProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{item.establishment}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.value}>R$ {item.value}</Text>
    </View>
  );
}
