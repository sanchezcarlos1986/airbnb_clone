import { StyleSheet } from "react-native";

const imageSize = 130;
const fontSize = 17;

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  myImageView: {
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 15,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  myImage: {
    height: imageSize,
    width: imageSize,
    marginTop: imageSize / 3,
    marginBottom: 20,
    borderRadius: imageSize / 2,
  },
  camera: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    marginBottom: 5,
  },
  joined: {
    color: "#333",
    fontSize,
  },
  editAvatar: {
    marginVertical: 8,
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
  btnSave: {
    marginBottom: 20,
  },
});
