import React from "react";
import { View, ImageBackground, Text, Pressable } from "react-native";
import { styles } from "./HomeScreen.styles";
import { Fontisto } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.searchButton}
        onPress={() => {
          navigation.navigate("Destination Search");
        }}
      >
        <Fontisto name="search" size={25} color="#f15454" />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require("../../../assets/images/village.jpg")}
        style={styles.image}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Go Near</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              console.log("Explore nearby stays");
            }}
          >
            <Text style={styles.buttonText}>Explore nearby stays</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
