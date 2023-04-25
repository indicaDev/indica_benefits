import { View } from "react-native";

import { Header } from "../../components/Header";
import { Form } from "./components/Form";

import styles from "./styles";

export function SignUp() {
  return (
    <View style={styles.container}>
      <Header title="Cadastro" />

      <Form />
    </View>
  );
}
