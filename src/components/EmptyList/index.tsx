import { Image, Text, View } from "react-native";

import styles from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ops!!! {"\n"} Está lista está vazia!</Text>
      <Image
        style={styles.image}
        source={require("../../../assets/emptyList.png")}
      />
    </View>
  );
}
