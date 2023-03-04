import React, { useState, useRef } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import styles from "./styles";

export function SignIn() {
  const [showPassword, setShowPassword] = useState(true);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const emailRef = useRef<TextInput>(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    emailRef.current.clear();
  };

  return (
    <View style={styles.container}>
      <Header title="Login" hasGoBack={false} />
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
            inputRef={emailRef}
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
        <Button title="Login" onPress={handleLogin} />
      </View>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerTitle}>Não tem conta?</Text>
        <Text style={styles.registerTitleBold}>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fingerPrint}
        onPress={() => Alert.alert("Sensor digital")}
      >
        <Text style={styles.fingerPrintTitle}>
          Toque no sensor digital do seu celular
        </Text>
        <Ionicons name="finger-print" size={64} color="#5D5FEF" />
      </TouchableOpacity>
    </View>
  );
}
