import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { styles } from "./Guests.styles";

import { GuestsRow } from "~/components";

const Guests = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  useEffect(() => {
    console.log({ adults, children, infants });
  }, [adults, children, infants]);

  return (
    <View style={styles.container}>
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
      <GuestsRow setValues={setInfants} title="Infants" description="Under 2" />
    </View>
  );
};

export default Guests;
