import React, { useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { styles } from "./DestinationSearch.styles";
import { Entypo } from "@expo/vector-icons";

import searchResults from "../../../assets/data/search";

const DestinationItem = ({ item }) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
      <Entypo name="location-pin" size={30} />
    </View>
    <Text style={styles.locationText}>{item.description}</Text>
  </View>
);

const DestinationSearch = () => {
  const [inputText, setInputText] = useState("");
  return (
    <View style={styles.container}>
      {/* Input component */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* List of destinations */}
      <FlatList
        data={searchResults}
        renderItem={({ item }) => <DestinationItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default DestinationSearch;
