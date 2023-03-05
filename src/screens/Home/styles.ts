import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  balanceAvailable: {
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 36,
    color: "#9796A1",
    marginTop: 33,
  },
  seeExtractButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 90,
  },
  seeExtractTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#5B5B5E",
    marginRight: 5,
  },
  balances: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 65,
  },
  balancesText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#5B5B5E",
  },
  cardsList: {
    marginTop: 54,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
