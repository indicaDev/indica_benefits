import { SafeAreaView } from "react-native";

import { SignIn } from "./src/screens/SignIn";
import { SignUp } from "./src/screens/SignUp";

import styles from "./src/styles/app";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUp />
    </SafeAreaView>
  );
}
