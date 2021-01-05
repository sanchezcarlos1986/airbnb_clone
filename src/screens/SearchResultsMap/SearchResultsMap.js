import React, { useState, useEffect, useRef } from "react";
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

  const flatlist = useRef();
  const map = useRef();

  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) return;

    const index = places.findIndex(({ id }) => id === selectedPlaceId);

    const selectedPlace = places[index];

    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };

    map.current.animateToRegion(region);

    flatlist.current.scrollToIndex({ index });
  }, [selectedPlaceId]);

  return (
    <View style={styles.map}>
      <MapView
        ref={map}
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
          ref={flatlist}
          data={places}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          snapToInterval={Dimensions.get("screen").width - 60}
          snapToAlignment="center"
          decelerationRate="fast"
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
