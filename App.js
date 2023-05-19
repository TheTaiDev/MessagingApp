import { AppRegistry } from 'react-native';
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home/HomeScreen";
import HomeLogin from "./screens/Login/HomeLogin";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeLogin"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeLogin" component={HomeLogin} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
