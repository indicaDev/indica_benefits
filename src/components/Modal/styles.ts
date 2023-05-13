import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  modalView: {
    backgroundColor: "#FFFFFF",
    minWidth: "100%",
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#5B5B5E",
  },
});

export default styles;
