import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./DestinationSearch.styles";
import { Entypo } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete/";
import { GOOGLE_API } from "../../config";

const DestinationItem = ({ item, navigation }) => (
  <Pressable onPress={() => navigation.navigate("Guests")}>
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" size={30} />
      </View>
      <Text style={styles.locationText}>{item.description}</Text>
    </View>
  </Pressable>
);

const DestinationSearch = ({ navigation }) => {
  const [inputText, setInputText] = useState("");
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onFail={(error) =>
          console.log("GooglePlacesAutocomplete error" + error)
        }
        onPress={(data, details = null) => console.log(data, details)}
        query={{
          key: GOOGLE_API,
          language: "en",
          types: "cities",
        }}
        renderRow={(item) => (
          <DestinationItem item={item} navigation={navigation} />
        )}
        suppressDefaultStyles
      />
    </View>
  );
};

export default DestinationSearch;
