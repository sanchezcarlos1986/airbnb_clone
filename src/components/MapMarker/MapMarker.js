import React from "react";
import { View, Text } from "react-native";
import { Marker } from "react-native-maps";
import { styles } from "./MapMarker.styles";

const MapMarker = ({ coordinate, price, onPress, isSelected }) => (
  <Marker coordinate={coordinate} onPress={onPress}>
    <View
      style={{
        ...styles.marker,
        backgroundColor: isSelected ? "black" : "white",
      }}
    >
      <Text
        style={{
          ...styles.markerTitle,
          color: isSelected ? "white" : "black",
        }}
      >
        ${price}
      </Text>
    </View>
  </Marker>
);

export default MapMarker;
