import { Text, View } from "react-native";

import { ExtractsData } from "../..";

import { formatToBrazilianCurrency } from "../../../../utils/currency";

interface ExtractItemProps {
  item: ExtractsData;
}

import styles from "./styles";

export function ExtractItem({ item }: ExtractItemProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{item.establishment}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.value}>
        {formatToBrazilianCurrency(Number(item.value))}
      </Text>
    </View>
  );
}
