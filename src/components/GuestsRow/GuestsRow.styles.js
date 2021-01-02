import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  detail: {
    color: "#8d8d8d",
  },
  amount: {
    alignItems: "center",
    marginHorizontal: 15,
    textAlign: "center",
    width: 20,
  },
  button: {
    alignItems: "center",
    borderColor: "#8d8d8d",
    borderRadius: 100,
    borderWidth: 1,
    height: 30,
    justifyContent: "center",
    width: 30,
  },
  buttonText: {
    fontSize: 20,
  },
  buttonsContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});
