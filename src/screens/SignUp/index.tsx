import { useRef, useState } from "react";
import { Alert, TextInput, View } from "react-native";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import styles from "./styles";

import { Button } from "../../components/Button";
import { Form } from "./components/Form";

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
