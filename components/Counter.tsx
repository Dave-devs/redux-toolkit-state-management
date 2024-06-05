import { View, Text, Button } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "@/slices/CounterSlice";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text testID="count">Count: {count}</Text>
      <Button
        testID="increment-count"
        title="Increment"
        onPress={() => dispatch(increment())}
      />
      <Button
        testID="decrement-count"
        title="Decrement"
        onPress={() => dispatch(decrement())}
      />
      <Button
        testID="increment-by-5"
        title="Increment by 5"
        onPress={() => dispatch(incrementByAmount(5))}
      />
      <Button
        testID="decrement-by-5"
        title="Derement by 5"
        onPress={() => dispatch(decrementByAmount(5))}
      />
    </View>
  );
}