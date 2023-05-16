import { Text, View } from "react-native";
import React, { Component } from "react";
import { ListItem } from "@rneui/themed";
import { Avatar } from "@rneui/base";

export class CustomListItem extends Component {
  render() {
    return (
      <ListItem>
        <Avatar
          rounded
          source={{
            uri: "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
          }}
        />
      </ListItem>
    );
  }
}

export default CustomListItem;
