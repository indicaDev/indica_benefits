import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication";
import { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { FingerPrint } from "../FingerPrint";

interface User {
  id: number;
  email: string;
  password: string;
}

import { api } from "../../../../services/api";
import styles from "./styles";

export function Form() {
  const initialUser: User = {
    id: null,
    email: "gilson@gmail.com",
    password: "12345",
  };

  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [user, setUser] = useState<User>(initialUser);
  const [loading, setLoading] = useState(false);
  const [hasSupportForBiometrics, setHasSupportForBiometrics] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (name: keyof User, value: string) => {
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async () => {
    if (!user.email || !user.password) {
      return Alert.alert("Preencha todos os campos!");
    }

    setLoading(true);

    try {
      const { data } = await api.get<User[]>("users");

      const userMatch = data.find((auth) => {
        return auth.email === user.email && auth.password === user.password;
      });

      if (userMatch) {
        if (userMatch.id) {
          await AsyncStorage.setItem(
            "@indica_benefits_user",
            userMatch.id.toString()
          );
        }
        navigation.navigate("tabs");
      } else {
        return Alert.alert("E-mail ou senha inválidos!");
      }
    } catch (error) {
      Alert.alert("Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    navigation.navigate("signUp");
  };

  const checkBiomentricsSupport = async () => {
    const biometrisRecord = await LocalAuthentication.isEnrolledAsync();

    return biometrisRecord;
  };

  const checkBiometricHardwareSupport = async () => {
    const biometricsHardwareSupport =
      await LocalAuthentication.hasHardwareAsync();

    if (!biometricsHardwareSupport) {
      return;
    }

    const hasBiometricsEnrolled = await checkBiomentricsSupport();

    setHasSupportForBiometrics(hasBiometricsEnrolled);
  };

  const handleAuthPress = async () => {
    const { success } = await LocalAuthentication.authenticateAsync();

    if (success) {
      navigation.navigate("tabs");
    } else {
      Alert.alert("Autenticação falhou, tente novamente!");
    }
  };

  useEffect(() => {
    checkBiometricHardwareSupport();
  }, []);

  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <Input
          name="E-mail"
          placeholder="Digite o seu e-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          value={user.email}
          onChangeText={(value) => handleChange("email", value)}
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
        value={user.password}
        onChangeText={(value) => handleChange("password", value)}
      />
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => Alert.alert("Esqueceu a senha?")}
      >
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} isLoading={loading} />
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleSignUp}>
        <Text style={styles.registerTitle}>Não tem conta?</Text>
        <Text style={styles.registerTitleBold}>Cadastre-se</Text>
      </TouchableOpacity>

      {hasSupportForBiometrics && <FingerPrint onPress={handleAuthPress} />}
    </View>
  );
}
