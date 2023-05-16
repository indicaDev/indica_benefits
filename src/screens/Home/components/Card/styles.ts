import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 180,
    backgroundColor: "#F5F5F5",
    justifyContent: "space-between",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DEDEDE",
    padding: 10,
    marginBottom: 20,
    marginRight: 20,
  },
  description: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#9796A1",
    marginLeft: 5,
  },
  value: {
    fontSize: 22,
    fontWeight: "500",
    color: "#9796A1",
  },
  arrowForwardIcon: {
    alignItems: "flex-end",
  },
});

export default styles;
