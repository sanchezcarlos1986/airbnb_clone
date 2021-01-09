import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./Review.styles";

const Review = ({ review }) => (
  <View style={styles.review}>
    <Text style={styles.reviewText} numberOfLines={4}>
      {review.description}
    </Text>
    <View style={styles.reviewProfile}>
      <Image
        style={styles.reviewImage}
        source={{
          uri: review.image,
        }}
      />
      <View>
        <Text style={styles.reviewName}>
          {review.name}, {review.from}
        </Text>
        <Text style={styles.reviewDate}>{review.date}</Text>
      </View>
    </View>
  </View>
);

export default Review;
