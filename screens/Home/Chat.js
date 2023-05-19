import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import React, { Component, useLayoutEffect, useState } from "react";
import { Avatar } from "@rneui/base";
import { auth } from "../../firebase";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Chat({ navigation, route }) {
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerTitleAlign: "left",
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            rounded
            source={{
              uri: auth?.currentUser?.photoURL,
            }}
          />
          <Text
            style={{
              color: "#FFFF",
              fontWeight: 700,
              marginLeft: 10,
              fontSize: 16,
            }}
          >
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color={"#FFFF"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color={"#FFFF"} />
          </TouchableOpacity>
        </View>
      ),
    });
  });
  const sendMess = () => {};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFF" }}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
      >
        <>
          <ScrollView>{/* {chat content} */}</ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              padding: 20,
            }}
          >
            <TextInput
              value={input}
              onChangeText={(text) => setInput(text)}
              placeholder="Enter Messenger"
            />
            <TouchableOpacity onPress={sendMess} activeOpacity={0.5}>
              <Ionicons name="send" size={24} color={"#2F80ED"} />
            </TouchableOpacity>
          </View>
        </>
        {/* <Text>{route.params.chatName}</Text> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
