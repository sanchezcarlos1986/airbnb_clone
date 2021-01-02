import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Router from "~/navigation/Router";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
