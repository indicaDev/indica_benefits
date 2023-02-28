import React, { useState } from "react";
import { View } from "react-native";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import styles from "./styles";

export function SigIn() {
  const [showPassword, setShowPassword] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
        />
      </View>
    </View>
  );
}
