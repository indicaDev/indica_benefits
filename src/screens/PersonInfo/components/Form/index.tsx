import { useState } from "react";
import { View } from "react-native";

import { Input } from "../../../../components/Input";

interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
}

import styles from "./styles";

export function Form() {
  const [userInfo, setUserInfo] = useState<UserData>({
    id: 1,
    name: "João da Silva",
    email: "joao.123@gmail.com",
    password: "123456",
  });
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <Input
          name="Nome completo"
          placeholder="Digite o seu nome"
          autoCapitalize="none"
          keyboardType="default"
          autoCorrect={false}
          value={userInfo?.name}
        />
      </View>
      <View style={styles.input}>
        <Input
          name="E-mail"
          placeholder="Digite o seu e-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          value={userInfo?.email}
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
        value={userInfo?.password}
      />
    </View>
  );
}
