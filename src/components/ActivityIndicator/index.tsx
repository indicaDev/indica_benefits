import { ActivityIndicator as RNActivityIndicator, View } from "react-native";

interface ActivityIndicatorProps {
  size?: "small" | "large";
  color?: string;
}

export function ActivityIndicator({
  size = "large",
  color = "#FFFFFF",
}: ActivityIndicatorProps) {
  return (
    <View>
      <RNActivityIndicator size={size} color={color} />
    </View>
  );
}
