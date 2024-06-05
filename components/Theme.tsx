import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/hook'
import { toggleTheme } from '@/slices/ThemeSlice';

export default function Theme() {
    const darkMode = useAppSelector((state) => state.theme.darkMode);
    const dispatch = useAppDispatch();

  return (
    <View>
      <Text>Current Theme: {darkMode ? 'Dark' : 'Light'} </Text>
      <Button title='Toggle Theme' onPress={() => dispatch(toggleTheme())} />
    </View>
  )
}