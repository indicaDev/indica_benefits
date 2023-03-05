import { useRef, useState } from "react";
import { TextInput, View } from "react-native";

import { Input } from "../../../../components/Input";

import styles from "./styles";

export function Form() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
        inputRef={passwordRef}
      />
    </View>
  );
}
