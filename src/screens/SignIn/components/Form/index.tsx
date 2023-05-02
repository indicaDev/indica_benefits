import { useRef, useState } from "react";
import { TextInput, View } from "react-native";

import { Input } from "../../../../components/Input";

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
    </View>
  );
}
