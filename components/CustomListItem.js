import { Text, View } from "react-native";
import React, { Component } from "react";
import { ListItem } from "@rneui/themed";
import { Avatar } from "@rneui/base";
import { auth } from "../firebase";
export default function CustomListItem({ id, chatName, enterChat }) {
  return (
    <ListItem
      containerStyle={{
        borderRadius: 18,
        marginTop: 40,
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
        <ListItem.Title>John Doe</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1}>
          Hello my name is John Doe pro no1 with love moahhhhhhhh
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}
