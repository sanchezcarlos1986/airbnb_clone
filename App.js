import React from "react";
import { StyleSheet, View } from "react-native";
import { HomeScreen, SearchResults } from "~/screens/";

export default function App() {
  return (
    <View style={styles.container}>
      <SearchResults />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
