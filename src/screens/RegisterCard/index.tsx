import { View } from "react-native";

import { Header } from "../../components/Header";
import { Form } from "./components/Form";
import styles from "./styles";

export function RegisterCard() {
  return (
    <View style={styles.container}>
      <Header title="Cadastrar cartão" />

      <Form />
    </View>
  );
}
