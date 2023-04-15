import { Text, TouchableOpacity, View } from "react-native";

interface ProfileItemProps {
  icon: JSX.Element;
  desciption: string;
  onPress: () => void;
}

import styles from "./styles";

export function ProfileItem({ desciption, icon, onPress }: ProfileItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.desciption}>{desciption}</Text>
    </TouchableOpacity>
  );
}
