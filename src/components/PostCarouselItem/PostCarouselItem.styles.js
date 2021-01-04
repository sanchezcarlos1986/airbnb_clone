import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 5,
    height: 150,
    width: Dimensions.get("window").width - 60,
    flex: 1,
    shadowColor: "black",
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  innerContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    overflow: "hidden",
  },
  image: {
    resizeMode: "cover",
    aspectRatio: 1,
    width: 130,
  },
  content: {
    flex: 1,
    padding: 12,
  },
  bedrooms: {
    color: "#5b5b5b",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
  prices: {
    fontSize: 18,
    marginTop: 10,
  },
  price: {
    fontWeight: "bold",
  },
});
