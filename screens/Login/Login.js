import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { Component, useEffect, useState, useRef } from "react";
import { auth } from "../../firebase";

export default ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubrice = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("HomeScreen");
      }
    });
    return unsubrice;
  }, []);
  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      if (error.code === "auth/user-not-found") {
        // Người dùng không tồn tại
        setError("Người dùng không tồn tại");
      } else if (error.code === "auth/wrong-password") {
        // Sai mật khẩu
        setError("Sai mật khẩu");
      } else if (error.code === "auth/invalid-email") {
        // Email không hợp lệ
        setError("Email không hợp lệ");
      }
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginHorizontal: 20,
          alignItems: "center",
          marginTop: 50,
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
          }}
          source={require("../../assets/images/login.png")}
        />
      </View>
      {/* form input */}
      <View
        style={{
          width: "90%",
          marginTop: 30,
          // backgroundColor: "red",
          marginHorizontal: 30,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 16,
              color: "#2E2E5D",
              lineHeight: 24,
              fontWeight: 600,
              // fontStyle: "normal",
            }}
          >
            Login to Your Account
          </Text>
        </View>
        <View
          style={{
            paddingTop: 32,
            gap: 20,
          }}
        >
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoFocus
            placeholder="Email"
            style={{
              width: 350,
              borderRadius: 8,
              fontSize: 14,
              lineHeight: 25,
              color: "#000000",
              paddingLeft: 30,
              height: 60,
              backgroundColor: "#F5F5FA",
            }}
          ></TextInput>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            placeholder="Password"
            style={{
              width: 350,
              borderRadius: 8,
              fontSize: 14,
              lineHeight: 25,
              color: "#000000",
              paddingLeft: 30,
              height: 60,
              backgroundColor: "#F5F5FA",
            }}
          ></TextInput>

          {error !== "" && <Text style={{ color: "red" }}>{error}</Text>}

          <TouchableOpacity
            onPress={signIn}
            style={{
              width: 350,
              height: 60,
              backgroundColor: "#4838D1",

              borderRadius: 8,
              alignItems: "center",

              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                textAlign: "center",
                fontWeight: 500,
                color: "#FFFFFF",
              }}
            >
              Login{" "}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              paddingLeft: 210,
              fontWeight: 700,
              lineHeight: 24,
              color: "#F77A55",
              fontSize: 16,
            }}
          >
            Forget Password ?
          </Text>
          {/* or login width */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 42,
            }}
          >
            <Text
              style={{
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 24,
                color: "#2E2E5D",
              }}
            >
              Or login with
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 30,

                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 90,
                  height: 60,
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: "#4838D1",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={require("../../assets/images/facebook.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 90,
                  height: 60,
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: "#4838D1",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={require("../../assets/images/google.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 90,
                  height: 60,
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: "#4838D1",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={require("../../assets/images/twiwter.png")}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  fontWeight: 400,
                  lineHeight: 24,
                  color: "#2E2E5D",
                  fontSize: 16,
                  paddingRight: 8,
                }}
              >
                Don’t have an accoun’t ?
              </Text>
              <Text
                onPress={() => {
                  navigation.navigate("Register");
                }}
                style={{
                  fontWeight: 700,
                  lineHeight: 24,
                  color: "#F77A55",
                  fontSize: 16,
                }}
              >
                Register
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
