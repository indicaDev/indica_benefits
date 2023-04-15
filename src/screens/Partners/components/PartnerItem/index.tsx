import { Text, View } from "react-native";

import { PartnersData } from "../..";

interface PartnerItemProps {
  item: PartnersData;
}

import styles from "./styles";

export function PartnerItem({ item }: PartnerItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.establishement}>{item.establishement}</Text>
      <Text style={styles.category}>{item.category}</Text>
    </View>
  );
}
