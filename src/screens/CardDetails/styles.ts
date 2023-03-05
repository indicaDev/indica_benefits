import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  infoBackground: {
    backgroundColor: "#5D5FEF",
    height: 270,
    marginTop: 24,
  },
  info: {
    backgroundColor: "#FFFFFF",
    height: 330,
    marginHorizontal: 30,
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  category: {
    fontSize: 24,
    fontWeight: "500",
    color: "#9796A1",
    textAlign: "center",
    marginTop: 30,
  },
  cardNumber: {
    fontSize: 17,
    fontWeight: "400",
    color: "#9796A1",
    textAlign: "center",
    marginTop: 14,
  },
  value: {
    fontSize: 36,
    fontWeight: "500",
    color: "#9796A1",
    textAlign: "center",
    marginTop: 20,
  },
  status: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 29,
    color: "#4AAB54",
  },
  movementsButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 40,
  },
  movementsButtonTitle: {
    fontSize: 20,
    color: "#5B5B5E",
    marginRight: 5,
  },
});

export default styles;
