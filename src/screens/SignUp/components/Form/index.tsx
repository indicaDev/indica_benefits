import { useRef, useState } from "react";
import { TextInput, View } from "react-native";

import { Input } from "../../../../components/Input";

interface User {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

import styles from "./styles";

export function Form() {
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

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
    </View>
  );
}
