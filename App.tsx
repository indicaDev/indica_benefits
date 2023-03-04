import { SafeAreaView } from "react-native";

import { Routes } from "./src/routes";

import styles from "./src/styles/app";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}
