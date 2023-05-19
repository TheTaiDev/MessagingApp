import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import CustomListItem from "../../components/CustomListItem";
import Icon from "react-native-vector-icons/Ionicons";
import { db } from "../../firebase";
import { auth } from "../../firebase";
import { Avatar } from "@rneui/base";
export default function Home({ navigation, route, chatName }) {
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("HomeLogin");
    });
  };

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
            onPress={signOutUser}
            rounded
            source={{
              uri: auth?.currentUser?.photoURL,
            }}
          />
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            marginRight: 20,
          }}
        >
          <Button
            onPress={() => navigation.navigate("AddChat")}
            title="New Chat"
            titleStyle={{ fontWeight: "500" }}
            buttonStyle={{
              backgroundColor: "rgba(90, 154, 230, 1)",
              borderColor: "transparent",
              borderWidth: 0,
            }}
            containerStyle={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </View>
      ),
    });
  });

  const [chats, setChats] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe(); // Unsubscribe from the snapshot listener when component unmounts
    };
  }, []);
  const enterChat = (id, chatName) => {
    navigation.navigate("Chat", {
      id: id,
      chatName: chatName,
    });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F7F7F7",
        height: "100%",
      }}
    >
      <ScrollView>
        {chats.map(({ id, data: { chatName } }) => (
          <CustomListItem
            enterChat={enterChat}
            key={id}
            id={id}
            chatName={chatName}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
