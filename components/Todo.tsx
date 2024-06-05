import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import { addTodo, removeTodo } from "@/slices/TodoSlice";

export default function Todo() {
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();
  
  const [ text, setText ] = useState<string>('');

  return (
    <View>
      <TextInput value={text} onChangeText={setText} />
      <Button
        title="Add Todo"
        onPress={() => {
            dispatch(addTodo(text));
          setText("");
        }}
      />
      {todos.map((todo) => (
        <View key={todo.id}>
          <Text>{todo.text}</Text>
          <Button
            title="Remove"
            onPress={() => dispatch(removeTodo(todo.id))}
          />
        </View>
      ))}
    </View>
  );
}
