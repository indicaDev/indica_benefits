import React, { useState } from "react";
import { TouchableOpacity, Text, View, Alert } from "react-native";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import styles from "./styles";

export function SigIn() {
  const [showPassword, setShowPassword] = useState(true);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  console.log(inputEmail);

  return (
    <View style={styles.container}>
      <Header title="Login" />
      <View style={styles.form}>
        <View style={styles.input}>
          <Input
            name="E-mail"
            placeholder="Digite o seu e-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
            value={inputEmail}
            onChangeText={setInputEmail}
          />
        </View>
        <Input
          name="Senha"
          placeholder="Digite a sua senha"
          autoCapitalize="none"
          keyboardType="default"
          secureTextEntry={showPassword}
          showPassword={showPassword}
          onPress={toggleShowPassword}
          value={inputPassword}
          onChangeText={setInputPassword}
        />
      </View>
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => Alert.alert("Esqueceu a senha?")}
      >
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => Alert.alert("Realiza login")} />
      </View>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerTitle}>Não tem conta?</Text>
        <Text style={styles.registerTitleBold}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
