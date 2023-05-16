import { Text, View, SafeAreaView } from "react-native";
import React, { Component } from "react";
import Header from "../../components/Home/Header";
export class Home extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#F7F7F7",
        }}
      >
        <Header />
      </SafeAreaView>
    );
  }
}

export default Home;
