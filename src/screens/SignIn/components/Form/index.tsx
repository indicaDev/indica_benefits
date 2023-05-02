import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { FingerPrint } from "../FingerPrint";

interface User {
  id: number;
  email: string;
  password: string;
}

import styles from "./styles";

export function Form() {
  const initialUser: User = {
    id: null,
    email: "",
    password: "",
  }

  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [user, setUser] = useState<User>(initialUser)

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (name: keyof User, value: string) => {
    setUser((prevState) => ({ ...prevState, [name]: value }));
  }

 

  const handleLogin = () => {
    //emailRef.current.clear();
    navigation.navigate("tabs");
  };

  const handleSignUp = () => {
    navigation.navigate("signUp");
  };

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
        value={user.password}
        onChangeText={(value) => handleChange("password", value)}
        inputRef={passwordRef}
      />
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => Alert.alert("Esqueceu a senha?")}
      >
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleSignUp}>
        <Text style={styles.registerTitle}>Não tem conta?</Text>
        <Text style={styles.registerTitleBold}>Cadastre-se</Text>
      </TouchableOpacity>

      <FingerPrint />
    </View>
  );
}
