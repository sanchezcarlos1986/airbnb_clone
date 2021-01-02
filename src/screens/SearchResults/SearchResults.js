import React from "react";
import { FlatList } from "react-native";
import { Post } from "~/components/";

import feeds from "../../../assets/data/feed";

const SearchResults = () => {
  return (
    <FlatList
      data={feeds}
      renderItem={({ item }) => <Post post={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default SearchResults;
