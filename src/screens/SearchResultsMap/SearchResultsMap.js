import React, { useState } from "react";
import { View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { styles } from "./SearchResultsMap.styles";
import { MapMarker } from "~/components";
import places from "../../../assets/data/feed";

const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  return (
    <View style={styles.map}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        provider={PROVIDER_GOOGLE}
      >
        {Array.isArray(places) &&
          places.map((item) => {
            const { id, newPrice, coordinate } = item;
            return (
              <MapMarker
                key={id}
                price={newPrice}
                coordinate={coordinate}
                isSelected={id === selectedPlaceId}
                onPress={() => setSelectedPlaceId(id)}
              />
            );
          })}
      </MapView>
    </View>
  );
};

export default SearchResultsMap;
