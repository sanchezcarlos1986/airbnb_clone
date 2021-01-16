import { StyleSheet, Dimensions } from "react-native";

const imageSize = 90;
const fontSize = 17;

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  modal: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    padding: 35,
  },
  myImageView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  myImage: {
    height: imageSize,
    width: imageSize,
    marginTop: imageSize / 3,
    marginBottom: 20,
    borderRadius: imageSize / 2,
  },
  title: {
    fontSize: 28,
    marginBottom: 5,
  },
  joined: {
    color: "#333",
    fontSize,
  },
  aboutDescription: {
    paddingVertical: 10,
    marginVertical: 20,
  },
  aboutDescriptionText: {
    fontSize: 22,
    paddingVertical: 10,
  },
  section: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginVertical: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize,
    marginVertical: 10,
  },
  sectionItem: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  sectionItemText: {
    fontSize,
    marginLeft: 10,
  },
  sectionIcon: {
    width: 22,
  },
});
