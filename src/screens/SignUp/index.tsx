import { useRef, useState } from "react";
import { Alert, TextInput, View } from "react-native";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import styles from "./styles";
import { Button } from "../../components/Button";

export function SignUp() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPasswordConfirm, setInputPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);

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

  return (
    <View style={styles.container}>
      <Header title="Cadastro" />
      <View style={styles.form}>
        <View style={styles.input}>
          <Input
            name="Nome Completo"
            placeholder="Digite o seu nome"
            autoCapitalize="words"
            keyboardType="email-address"
            value={inputName}
            onChangeText={setInputName}
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
            value={inputEmail}
            onChangeText={setInputEmail}
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
            value={inputPassword}
            onChangeText={setInputPassword}
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
          value={inputPasswordConfirm}
          onChangeText={setInputPasswordConfirm}
          inputRef={passwordConfirmRef}
        />
      </View>
      <View style={styles.registerButton}>
        <Button title="Cadastrar" onPress={() => Alert.alert("Cadastrar")} />
      </View>
    </View>
  );
}
