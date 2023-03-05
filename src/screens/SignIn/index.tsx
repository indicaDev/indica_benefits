import { Alert, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import styles from "./styles";
import { Form } from "./components/Form";
import { FingerPrint } from "./components/FingerPrint";

export function SignIn() {
  const navigation = useNavigation();

  const handleLogin = () => {
    //emailRef.current.clear();
    navigation.navigate("tabs");
  };

  const handleSignUp = () => {
    navigation.navigate("signUp");
  };

  return (
    <View style={styles.container}>
      <Header title="Login" hasGoBack={false} />

      <Form />

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
