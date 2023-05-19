import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomListItem from "../../components/CustomListItem";
import Icon from "react-native-vector-icons/Ionicons";
import { db } from "../../firebase";

export default function Home({ navigation }) {
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
          <Icon
            onPress={() => navigation.navigate("AddChat")}
            name="chatbubble-outline"
            size={24}
            color={"#4F5E7B"}
          />
        </View>
      </View>
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
