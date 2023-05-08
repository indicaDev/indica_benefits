import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

interface FingerPrintProps {
  onPress: () => void;
}

import styles from "./styles";

export function FingerPrint({ onPress }: FingerPrintProps) {
  return (
    <TouchableOpacity style={styles.fingerPrint} onPress={onPress}>
      <Text style={styles.fingerPrintTitle}>
        Toque no sensor digital do seu celular
      </Text>
      <Ionicons name="finger-print" size={64} color="#5D5FEF" />
    </TouchableOpacity>
  );
}
