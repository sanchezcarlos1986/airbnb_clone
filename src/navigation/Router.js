import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen,
  SearchResults,
  DestinationSearch,
  Guests,
} from "~/screens/";
import HomeTabNavigator from "~/navigation/HomeTabNavigator";

const Stack = createStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Guests"
        component={Guests}
        options={{ title: "How many people?" }}
      />
      <Stack.Screen
        name="Destination Search"
        component={DestinationSearch}
        options={{ title: "Search your destination" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
