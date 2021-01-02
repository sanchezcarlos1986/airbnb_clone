import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./GuestsRow.styles";

const GuestsRow = ({ title, description, setValues }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValues(value);
  }, [value]);

  return (
    <View>
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.detail}>{description}</Text>
        </View>

        {/* Buttons with values */}
        <View style={styles.buttonsContainer}>
          <Pressable
            disabled={value === 0}
            onPress={() => setValue(value - 1)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.amount}>{value}</Text>
          <Pressable onPress={() => setValue(value + 1)} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestsRow;
