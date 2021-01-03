import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { SearchResults, SearchResultsMap } from "~/screens/";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "#f15454",
      indicatorStyle: {
        backgroundColor: "#f15454",
      },
    }}
  >
    <Tab.Screen name="List" component={SearchResults} />
    <Tab.Screen name="Map" component={SearchResultsMap} />
  </Tab.Navigator>
);

export default SearchResultsTabNavigator;
