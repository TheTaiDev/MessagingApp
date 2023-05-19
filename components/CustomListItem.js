import { Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ListItem } from "@rneui/themed";
import { Avatar } from "@rneui/base";
import { db } from "../firebase";

export default function CustomListItem({ id, chatName, enterChat }) {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatMessages(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ListItem
      onPress={() => enterChat(id, chatName)}
      key={id}
      bottomDivider
      containerStyle={{
        borderRadius: 18,
        marginTop: 15,
        marginHorizontal: 10,
      }}
    >
      <Avatar
        rounded
        source={{
          uri:
            chatMessages[0]?.photoURL ||
            "https://thumbs.dreamstime.com/b/avatar-icon-social-icon-exclamation-mark-avatar-icon-alert-error-alarm-danger-symbol-avatar-icon-social-icon-118920146.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{chatName}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1}>abc</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}
