import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { updateBio, setProfile } from "@/slices/ProfileSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";

export default function Profile() {
    const { name, age, bio } = useAppSelector((state) => state.profile);
    const dispatch = useAppDispatch();
    const [newBio, setNewBio] = useState<string>('');
    
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Bio: {bio}</Text>
      <TextInput
        value={newBio}
        onChangeText={setNewBio}
        placeholder="Update bio"
      />
      <Button
        title="Update Bio"
        onPress={() => {
          dispatch(updateBio(newBio));
          setNewBio("");
        }}
      />
      <Button
        title="Set Profile"
        onPress={() =>
          dispatch(
            setProfile({ name: "John Doe", age: 30, bio: "Software Developer" })
          )
        }
      />
    </View>
  );
}
