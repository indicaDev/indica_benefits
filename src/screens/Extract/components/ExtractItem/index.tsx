import { Text, View } from "react-native";

import { ExtractsData } from "../..";

interface ExtractItemProps {
  item: ExtractsData;
}

import styles from "./styles";

export function ExtractItem({ item }: ExtractItemProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{item.establishement}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.value}>R$ {item.value}</Text>
    </View>
  );
}
