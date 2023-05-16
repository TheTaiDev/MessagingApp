import React from "react";

import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";

import Icon from "react-native-vector-icons/Ionicons";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Medium,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import { TouchableOpacity } from "react-native-gesture-handler";
export default ({ navigation }) => {
  const dataHd = [
    {
      name: "All chats",
      bgr: "#2F80ED",
      textColor: "#FFFFFF",
    },
    {
      name: "Personal",
      bgr: "#FFFFFF",
      textColor: "#1B1A57",
    },
    {
      name: "Work",
      bgr: "#FFFFFF",
      textColor: "#1B1A57",
    },
    {
      name: "Groups",
      bgr: "#FFFFFF",
      textColor: "#1B1A57",
    },
  ];

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
              fontFamily: "Roboto_700Bold",
              fontSize: 18,
              lineHeight: 24,
            }}
          >
            Recent Chats
          </Text>
          <Icon name="search" size={24} color={"#4F5E7B"} />
        </View>

        {/*  */}

        <View
          style={{
            marginTop: 25,
            flexDirection: "row",
            gap: 30,
          }}
        >
          {dataHd.map((val) => {
            return (
              <TouchableOpacity
                style={{
                  //   width: 62,
                  paddingHorizontal: 10,
                  height: 26,
                  borderRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: val.bgr,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: val.textColor,
                    lineHeight: 18,
                    fontFamily: "Roboto_400Regular",
                  }}
                >
                  {" "}
                  {val.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
};
