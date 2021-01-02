import React from "react";
import { StyleSheet, View } from "react-native";
// import { HomeScreen } from "~/screens/";
import { Post } from "~/components/";

import feeds from "./assets/data/feed";

export default function App() {
  return (
    <View style={styles.container}>
      <Post post={feeds[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
