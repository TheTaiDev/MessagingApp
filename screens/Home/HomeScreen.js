import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import AddChat from "./AddChat";
import Chat from "./Chat";
const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#2F80ED",
          },
          headerTintColor: "#FFFF",
          headerTitleStyle: {},
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Add a new chat",
          headerStyle: {
            backgroundColor: "#2F80ED",
          },
          headerTintColor: "#FFFF",
          headerTitleStyle: {},
        }}
        name="AddChat"
        component={AddChat}
      />
      <Stack.Screen
        options={{
          headerShown: true,

          title: "Chat",
          headerStyle: {
            backgroundColor: "#2F80ED",
          },
          headerTintColor: "#FFFF",
          headerTitleStyle: {},
        }}
        component={Chat}
        name="Chat"
      />
    </Stack.Navigator>
  );
}
