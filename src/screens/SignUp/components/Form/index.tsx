import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { Alert, TextInput, View } from "react-native";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";

import { api } from "../../../../services/api";

interface User {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

import styles from "./styles";

export function Form() {
  const initialUser: User = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);
  const [user, setUser] = useState<User>(initialUser);

  const nameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmRef = useRef<TextInput>(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const handleChange = (name: keyof User, value: string) => {
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignIn = () => {
    navigation.navigate("signIn");
  };

  const resetValues = () => {
    setUser(initialUser);
  };

  const handleSubmit = async () => {
    if (!user.name || !user.email || !user.password) {
      return Alert.alert("Preencha todos os campos!");
    }

    if (user.password !== user.passwordConfirm) {
      return Alert.alert("As senhas não conferem!");
    }

    try {
      const { status } = await api.post("users", user);

      if (status === 201) {
        handleSignIn();
      }
    } catch (error) {
      Alert.alert("Erro ao realizar o cadastro!");
      console.log("Error: ", error);
    } finally {
      resetValues();
    }
  };

  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <Input
          name="Nome Completo"
          placeholder="Digite o seu nome"
          autoCapitalize="words"
          keyboardType="email-address"
          value={user.name}
          onChangeText={(value) => handleChange("name", value)}
          inputRef={nameRef}
        />
      </View>
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
      <View style={styles.input}>
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
      </View>
      <Input
        name="Senha"
        placeholder="Confirme a senha"
        autoCapitalize="none"
        keyboardType="default"
        secureTextEntry={showPasswordConfirm}
        showPassword={showPasswordConfirm}
        onPress={toggleShowPasswordConfirm}
        value={user.passwordConfirm}
        onChangeText={(value) => handleChange("passwordConfirm", value)}
        inputRef={passwordConfirmRef}
      />
      <View style={styles.registerButton}>
        <Button title="Cadastrar" onPress={handleSubmit} />
      </View>
    </View>
  );
}
