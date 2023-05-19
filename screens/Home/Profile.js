import {
  Text,
  StatusBar,
  View,
  SafeAreaView,
  ScrollView,
  Switch,
  useColorScheme,
  Button,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { ListItem } from "@rneui/themed";
import { Avatar } from "@rneui/base";
import { auth } from "../../firebase";
import AppLoading from "expo-app-loading";

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
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

export default function Profile({ navigation }) {
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("HomeLogin");
    });
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const dataSetting = [
    {
      iconLeft: "moon",
      name: "Dark mode",
      iconRight: "chevron-forward",
      // vdark: "isDarkMode",
      // toggleDarkMode: "toggleDarkMode",
    },
    {
      iconLeft: "person",
      name: "Account",
      iconRight: "chevron-forward",
    },
    {
      iconLeft: "ios-notifications",
      name: "Notification",
      iconRight: "chevron-forward",
    },
    {
      iconLeft: "chatbubble-sharp",
      name: "Chat settings",
      iconRight: "chevron-forward",
    },
    {
      iconLeft: "lock-closed",
      name: "Privacy and security",
      iconRight: "chevron-forward",
    },
    {
      iconLeft: "md-bug",
      name: "About",
    },
    {
      iconLeft: "ios-log-out-outline",
      name: "Sign out",
      logout: signOutUser,
    },
  ];

  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
        }}
      >
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

        <View
          style={{
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
                color: isDarkMode ? "#FFFFFF" : "#4F5E7B",
              }}
            >
              Settings{" "}
            </Text>
            <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
          </View>
          {/*  */}
        </View>
        <View>
          <ListItem
            containerStyle={{
              borderRadius: 18,
              marginTop: 20,
              marginHorizontal: 10,
            }}
          >
            <Avatar
              style={{
                height: 65,
                width: 65,
              }}
              rounded
              source={{
                uri: auth?.currentUser?.photoURL,
              }}
            />

            {/* // uri:
          "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg", */}
            <ListItem.Content>
              <ListItem.Title
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  lineHeight: 24,
                  color: "#1B1A57",
                }}
                onPress={() => navigation.navigate("EditProfileScreen")}
              >
                {auth?.currentUser?.displayName}
              </ListItem.Title>
              <ListItem.Subtitle
                style={{
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: 18,
                  color: "#4F5E7B",
                }}
                numberOfLines={1}
              >
                Hello my name is John Doe pro no1 with love moahhhhhhhh
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
        <View>
          {dataSetting.map((val, index) => {
            return (
              <View
                style={{
                  width: 359,
                  height: 57,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginHorizontal: 35,
                  marginTop: 20,
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <Icon
                    name={val.iconLeft}
                    size={25}
                    color={isDarkMode ? "#FFFFFF" : "#4F5E7B"}
                  />
                  <Text
                    onPress={val.logout}
                    style={{
                      fontSize: 14,
                      fontFamily: "Roboto_400Regular",
                      color: isDarkMode ? "#FFFFFF" : "#4F5E7B",
                    }}
                  >
                    {val.name}
                  </Text>
                </View>
                <View>
                  <Icon name={val.iconRight} size={25} color={"#4F5E7B"} />
                </View>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}
