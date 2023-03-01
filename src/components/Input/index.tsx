import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

type InputProps = TextInputProps & {
  name: string;
  onPress?: () => void;
  showPassword?: boolean | null;
  inputRef?: React.RefObject<TextInput>;
};

export function Input({
  name,
  onPress,
  showPassword,
  inputRef,
  ...rest
}: InputProps) {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.textInput}>
        <TextInput ref={inputRef} {...rest} style={styles.input} />
        {showPassword != null && (
          <TouchableOpacity onPress={onPress}>
            <Ionicons
              name={showPassword ? "md-eye" : "md-eye-off"}
              size={30}
              color="#5D5FEF"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
