import React from "react";
import { StyleSheet, View } from "react-native";
import {
  HomeScreen,
  SearchResults,
  DestinationSearch,
  Guests,
} from "~/screens/";

export default function App() {
  return (
    <View style={styles.container}>
      <Guests />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
