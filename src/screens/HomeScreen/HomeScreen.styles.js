import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-start",
  },
  image: {
    height: 500,
    justifyContent: "center",
    resizeMode: "cover",
    width: "100%",
  },
  content: {
    alignItems: "flex-start",
    padding: 20,
    width: Dimensions.get("window").width,
  },
  title: {
    textShadowOffset: {
      height: 5,
      width: 1,
    },
    textShadowColor: "rgba(0,0,0,.4)",
    textShadowRadius: 10,
    color: "white",
    fontSize: 100,
    fontWeight: "bold",
    lineHeight: 100,
    width: "70%",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 100,
    flexDirection: "row",
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 12,
    top: 45,
    zIndex: 5,
    width: "90%",
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
