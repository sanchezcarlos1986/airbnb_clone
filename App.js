import React from "react";
import { StyleSheet, View } from "react-native";
import { HomeScreen } from "~/screens/";
import { Post } from "~/components/";

export default function App() {
  return (
    <View style={styles.container}>
      <Post />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
