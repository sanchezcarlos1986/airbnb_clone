import React, { useState } from "react";
import { View, FlatList, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { styles } from "./SearchResultsMap.styles";
import { MapMarker, PostCarouselItem } from "~/components";
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
      <View style={styles.carousel}>
        <FlatList
          data={places}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          snapToInterval={Dimensions.get("screen").width - 60}
          snapToAlignment="center"
          decelerationRate="fast"
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
