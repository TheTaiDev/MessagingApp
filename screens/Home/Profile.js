import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { ListItem } from "@rneui/themed";
import { Avatar } from "@rneui/base";
import { auth } from "../../firebase";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFF",
      }}
    >
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
            Settings{" "}
          </Text>
          <Icon name="search" size={24} color={"#4F5E7B"} />
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
            >
              John Doe
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
    </SafeAreaView>
  );
}
