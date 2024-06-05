import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { logout, login } from "@/slices/AuthSlice";
import { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";

export default function Auth() {
  const { isAuthenticated, username } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  return (
    <View>
      {isAuthenticated ? (
        <View>
          <Text>Welcome, {username}</Text>
          <Button title="Logout" onPress={() => dispatch(logout())} />
        </View>
      ) : (
        <View>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter username"
          />
          <Button title="Login" onPress={() => dispatch(login(name))} />
        </View>
      )}
    </View>
  );
}
