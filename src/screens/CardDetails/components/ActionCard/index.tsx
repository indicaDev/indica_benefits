import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

interface ActionCardProps {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    isActive: boolean;
    onPress?: () => void;
}

export function ActionCard({ icon, isActive, title, onPress }: ActionCardProps) {
    return (
        <TouchableOpacity disabled={!isActive} onPress={onPress} style={[styles.container, isActive ? styles.containerIsActive : styles.containerDisabled]}>
            <Ionicons size={30} name={icon} color={ isActive ? "#5D5FEF" : '#D7DCE4'} />
            <Text style={[styles.title, isActive ? styles.titleIsActive : styles.titleDisabled]}>{title}</Text>
        </TouchableOpacity>
    )
}