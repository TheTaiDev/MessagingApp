import React from "react";

import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";

import Icon from "react-native-vector-icons/Ionicons";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { TouchableOpacity } from "react-native-gesture-handler";
export default ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={{
          paddingTop: 50,
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: 700,
              fontSize: 18,
              lineHeight: 24,
            }}
          >
            Recent Chats
          </Text>
          <Icon name="search" size={24} color={"#4F5E7B"} />
        </View>
      </View>
    );
  }
};
