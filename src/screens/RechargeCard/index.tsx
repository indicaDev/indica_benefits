import { View } from "react-native";

import { Header } from "../../components/Header";

import { Form } from "./components/Form";
import styles from "./styles";

export function RechargeCard() {
  return (
    <View style={styles.container}>
      <Header title="Recarregar cartão" />

      <Form />
    </View>
  );
}
