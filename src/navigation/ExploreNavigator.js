import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "~/screens/";
import SearchResultsTabNavigator from "./SearchResultsTabNavigator";

const Stack = createStackNavigator();

const Router = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SearchResults"
      component={SearchResultsTabNavigator}
      options={{ title: "Search Results" }}
    />
  </Stack.Navigator>
);

export default Router;
