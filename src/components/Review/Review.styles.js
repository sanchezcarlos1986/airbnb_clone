import { StyleSheet } from "react-native";

const reviewImage = 55;
const fontSize = 17;

export const styles = StyleSheet.create({
  review: {
    paddingVertical: 10,
    marginVertical: 10,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  reviewImage: {
    borderRadius: reviewImage / 2,
    height: reviewImage,
    marginRight: 22,
    width: reviewImage,
  },
  reviewProfile: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  reviewText: { fontSize, lineHeight: 24 },
  reviewName: {
    fontSize: 15,
    fontWeight: "600",
  },
  reviewDate: {
    fontSize: 14,
  },
});
