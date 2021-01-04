import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import { styles } from "./PostCarouselItem.styles";

const PostCarouselItem = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ImageBackground style={styles.image} source={{ uri: post.image }} />

        {/* Beds and Bedroom */}
        <View style={styles.content}>
          <Text style={styles.bedrooms}>
            {post.bed} {post.bed === 1 ? "bed" : "beds"} · {post.bedroom}{" "}
            {post.bedroom === 1 ? "bedroom" : "bedrooms"}
          </Text>

          {/* Type and Description */}
          <Text
            style={styles.description}
            numberOfLines={2}
          >{`${post.type}. ${post.title}`}</Text>

          {/* Prices */}
          <Text style={styles.prices}>
            <Text style={styles.price}>{`$${post.newPrice}`}</Text> / night
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostCarouselItem;
