import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { SearchResults } from "~/screens/";

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
    <Tab.Screen name="Map" component={SearchResults} />
  </Tab.Navigator>
);

export default SearchResultsTabNavigator;