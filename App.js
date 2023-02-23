import { SafeAreaView } from "react-native";

import { SigIn } from "./src/screens/SignIn";

import styles from "./src/styles/app";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SigIn />
    </SafeAreaView>
  );
}
