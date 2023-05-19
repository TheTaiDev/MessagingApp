import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { auth } from "../../firebase";

export default function EditProfileScreen() {
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load thông tin cá nhân ban đầu
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName);
      setPhotoURL(user.photoURL);
    }
  }, []);

  const updateProfile = () => {
    setIsLoading(true);

    const user = auth.currentUser;
    if (user) {
      user
        .updateProfile({
          displayName: displayName,
          photoURL: photoURL,
        })
        .then(() => {
          console.log("Thông tin cá nhân đã được cập nhật thành công!");
        })
        .catch((error) => {
          console.log("Lỗi khi cập nhật thông tin cá nhân:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Display Name:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
        }}
        value={displayName}
        onChangeText={setDisplayName}
      />

      <Text style={{ fontSize: 16, marginBottom: 10 }}>Photo URL:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
        }}
        value={photoURL}
        onChangeText={setPhotoURL}
      />

      <Button
        title={isLoading ? "Updating..." : "Update Profile"}
        onPress={updateProfile}
        disabled={isLoading}
      />
    </View>
  );
}
