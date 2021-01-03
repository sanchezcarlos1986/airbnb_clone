import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Fontisto,
  FontAwesome,
  FontAwesome5,
  Feather,
  EvilIcons,
} from "@expo/vector-icons";

import { HomeScreen } from "~/screens/";
import ExploreNavigator from "~/navigation/ExploreNavigator";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => (
  <Tab.Navigator tabBarOptions={{ activeTintColor: "#f15454" }}>
    <Tab.Screen
      name="Explore"
      component={ExploreNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <Fontisto name="search" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Saved"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="heart-o" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Airbnb"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="airbnb" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Messages"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="message-square" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <EvilIcons name="user" size={30} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default HomeTabNavigator;
