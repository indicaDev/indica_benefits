import { Text, View } from "react-native";

import { MovimentsData } from "../..";

import { formatToBrazilianCurrency } from "../../../../utils/currency";

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
      <Text style={styles.value}>
        {formatToBrazilianCurrency(Number(item.value))}
      </Text>
    </View>
  );
}
