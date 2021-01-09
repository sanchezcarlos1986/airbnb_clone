import { StyleSheet } from "react-native";

const imageSize = 90;
const fontSize = 17;

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
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
