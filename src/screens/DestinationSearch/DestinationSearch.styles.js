import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 20,
    margin: 20,
  },
  textInput: {
    fontSize: 20,
  },
  row: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    flexDirection: "row",
    paddingVertical: 15,
  },
  iconContainer: {
    backgroundColor: "#e7e7e7",
    borderRadius: 5,
    marginRight: 10,
    padding: 7,
  },
  locationText: {},
});
