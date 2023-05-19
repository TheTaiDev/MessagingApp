import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";

import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { auth } from "../../firebase";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
export default ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imglog, setImglogo] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imglog ||
            "https://st.quantrimang.com/photos/image/072015/22/avatar.jpg",
        });
        navigation.replace("Login");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Địa chỉ email đã được sử dụng.");
            break;
          case "auth/invalid-email":
            alert("Địa chỉ email không hợp lệ.");
            break;
          case "auth/weak-password":
            alert("Mật khẩu không đủ mạnh.");
            break;
          default:
            alert("Đã xảy ra lỗi khi tạo tài khoản.", error.message);
        }
      });
  };
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <ScrollView>
          <View
            style={{
              width: "90%",
              justifyContent: "center",
              marginHorizontal: 20,
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Image
              style={{
                width: 120,
                height: 120,
              }}
              source={require("../../assets/images/splash.png")}
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
                Create an account for you!
              </Text>
            </View>
            <View
              style={{
                paddingTop: 32,
                gap: 20,
              }}
            >
              <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Full Name"
                style={{
                  width: 350,
                  borderRadius: 8,
                  fontSize: 14,
                  lineHeight: 25,
                  color: "#B8B8C7",
                  paddingLeft: 30,
                  height: 60,
                  backgroundColor: "#F5F5FA",
                }}
              ></TextInput>
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
                style={{
                  width: 350,
                  borderRadius: 8,
                  fontSize: 14,
                  lineHeight: 25,
                  color: "#B8B8C7",
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
                  color: "#B8B8C7",
                  paddingLeft: 30,
                  height: 60,
                  backgroundColor: "#F5F5FA",
                }}
              />
              <TextInput
                value={imglog}
                onChangeText={(text) => setImglogo(text)}
                onSubmitEditing={register}
                placeholder="Profile Picture URL"
                style={{
                  width: 350,
                  borderRadius: 8,
                  fontSize: 14,
                  lineHeight: 25,
                  color: "#B8B8C7",
                  paddingLeft: 30,
                  height: 60,
                  backgroundColor: "#F5F5FA",
                }}
              />

              <TouchableOpacity
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
                  onPress={register}
                  style={{
                    fontSize: 16,
                    lineHeight: 24,
                    textAlign: "center",
                    fontWeight: 500,
                    color: "#FFFFFF",
                  }}
                >
                  Create now
                </Text>
              </TouchableOpacity>
              <Text
                onPress={() => navigation.navigate("Login")}
                style={{
                  fontWeight: 700,
                  lineHeight: 24,
                  color: "#F77A55",
                  fontSize: 16,
                }}
              >
                Do you already have an account
              </Text>
              {/* or login width */}
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 42,
                }}
              ></View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};
