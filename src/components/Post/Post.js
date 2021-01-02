import React from "react";
import { View, Image, ImageBackground, Text, Pressable } from "react-native";
import { styles } from "./Post.styles";
import { Fontisto } from "@expo/vector-icons";

const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
      />

      {/* Beds and Bedroom */}
      <Text style={styles.bedrooms}>1 bed · 1 bedroom</Text>

      {/* Type and Description */}
      <Text style={styles.description} numberOfLines={2}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
        debitis, deleniti ullam hic vel esse, doloribus vero magnam magni
        asperiores commodi sed ipsum nihil, maiores beatae ipsam accusamus
        similique in.
      </Text>

      {/* Prices */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>{" "}
        <Text style={styles.price}>$30</Text> / night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
