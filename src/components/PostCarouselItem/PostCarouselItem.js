import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./PostCarouselItem.styles";

const PostCarouselItem = ({ post }) => {
  const navigation = useNavigation();
  const goToPostPage = () =>
    navigation.navigate("PostScreen", { postId: post.id });

  return (
    <Pressable style={styles.container} onPress={goToPostPage}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{ uri: post.image }} />

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
    </Pressable>
  );
};

export default PostCarouselItem;
