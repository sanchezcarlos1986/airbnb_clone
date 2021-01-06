import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 20,
  },
  image: {
    width: "100%",
    borderRadius: 16,
    aspectRatio: 3 / 2,
    resizeMode: "cover",
  },
  bedrooms: {
    color: "#5b5b5b",
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: "#5b5b5b",
    padding: 20,
    textDecorationLine: "line-through",
  },
  price: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
  longDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
    marginBottom: 40,
  },
});
