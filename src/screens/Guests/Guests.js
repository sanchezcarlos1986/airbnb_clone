import React, { useState, useEffect } from "react";
import { View, Pressable, Text } from "react-native";
import { GuestsRow } from "~/components";
import { styles } from "./Guests.styles";

const Guests = ({ navigation }) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  useEffect(() => {
    // console.log("Guests.....", { adults, children, infants });
  }, [adults, children, infants]);

  return (
    <View style={styles.container}>
      <View>
        <GuestsRow
          setValues={setAdults}
          title="Adults"
          description="Ages 13 or above"
        />
        <GuestsRow
          setValues={setChildren}
          title="Children"
          description="Ages 2 to 12"
        />
        <GuestsRow
          setValues={setInfants}
          title="Infants"
          description="Under 2"
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("Home", {
            screen: "Explore",
            params: { screen: "SearchResults" },
          })
        }
      >
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>
    </View>
  );
};

export default Guests;
