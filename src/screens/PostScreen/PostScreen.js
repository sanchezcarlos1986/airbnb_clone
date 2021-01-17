import React from "react";
import { View } from "react-native";
import { Post } from "~/components";
import { useRoute } from "@react-navigation/native";
import { styles } from "./PostScreen.styles";

import places from "../../../assets/data/feed";

const PostScreen = () => {
  const route = useRoute();
  const post = places.find((place) => place.id === route.params.postId);

  return (
    <View style={styles.container}>
      <Post post={post} detailed />
    </View>
  );
};

export default PostScreen;
