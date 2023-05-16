import { Text, View } from "react-native";
import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export default function HomeLogin() {
  return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
          }}
        />
      </Stack.Navigator>
  );
}
