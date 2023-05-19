import { Text, View } from "react-native";
import React, { Component } from "react";
import { ListItem } from "@rneui/themed";
import { Avatar } from "@rneui/base";
import { auth } from "../firebase";

export default function CustomListItem({ id, chatName, enterChat }) {
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
          uri: auth?.currentUser?.photoURL,
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{chatName}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1}>abc</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}
