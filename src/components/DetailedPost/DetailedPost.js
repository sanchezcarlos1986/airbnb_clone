import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { styles } from "./DetailedPost.styles";

const DetailedPost = ({ post }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={{ uri: post.image }} />

      {/* Beds and Bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} {post.bed === 1 ? "bed" : "beds"} · {post.bedroom}{" "}
        {post.bedroom === 1 ? "bedroom" : "bedrooms"}
      </Text>

      {/* Type and Description */}
      <Text style={styles.description} numberOfLines={2}>
        {`${post.type}. ${post.title}`}
      </Text>

      {/* Prices */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>{`$${post.oldPrice}`}</Text>{" "}
        <Text style={styles.price}>{`$${post.newPrice}`}</Text> / night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>{`$${post.totalPrice} total`}</Text>

      <Text style={styles.longDescription}>{post.description}</Text>
    </ScrollView>
  );
};

export default DetailedPost;
