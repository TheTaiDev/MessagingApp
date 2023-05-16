import {
  Text,
  View,
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
} from "react-native";
import React, { Component, useLayoutEffect } from "react";
import CustomListItem from "../../components/CustomListItem";
import Header from "../../components/Home/Header";
export default function Home() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F7F7F7",
      }}
    >
      <Header />
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
}

