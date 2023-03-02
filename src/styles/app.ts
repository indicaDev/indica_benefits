import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});

export default styles;
