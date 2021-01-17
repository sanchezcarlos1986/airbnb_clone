import React from "react";
import { Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Post.styles";

const Post = ({ post, detailed }) => {
  const navigation = useNavigation();
  const goToPostPage = () =>
    navigation.navigate("PostScreen", { postId: post.id });

  return (
    <Pressable style={styles.container} onPress={goToPostPage}>
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

      {post?.description && Boolean(detailed) ? (
        <Text style={styles.longDescription}>{post.description}</Text>
      ) : null}
    </Pressable>
  );
};

export default Post;
