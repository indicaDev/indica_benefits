import { Alert, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export function FingerPrint() {
  return (
    <TouchableOpacity
      style={styles.fingerPrint}
      onPress={() => Alert.alert("Sensor digital")}
    >
      <Text style={styles.fingerPrintTitle}>
        Toque no sensor digital do seu celular
      </Text>
      <Ionicons name="finger-print" size={64} color="#5D5FEF" />
    </TouchableOpacity>
  );
}
