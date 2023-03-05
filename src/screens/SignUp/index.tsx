import { Alert, View } from "react-native";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Form } from "./components/Form";

import styles from "./styles";

export function SignUp() {
  return (
    <View style={styles.container}>
      <Header title="Cadastro" />

      <Form />

      <View style={styles.registerButton}>
        <Button title="Cadastrar" onPress={() => Alert.alert("Cadastrar")} />
      </View>
    </View>
  );
}
