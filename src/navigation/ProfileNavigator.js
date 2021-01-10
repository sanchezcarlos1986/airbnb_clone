import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile, EditProfile } from "~/screens/";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

const Router = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Tu Perfil",
          headerRight: () => (
            <AntDesign
              name="edit"
              size={24}
              color="black"
              onPress={() => navigation.navigate("EditProfile")}
            />
          ),
          headerRightContainerStyle: {
            marginRight: 16,
          },
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: "Editar Perfil" }}
      />
    </Stack.Navigator>
  );
};

export default Router;
