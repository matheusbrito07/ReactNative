 import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import Historia from './views/Historia'
import Team from './views/Team'
import Login from './views/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App(){

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Team" component={Team} />
        <Stack.Screen name="Historia" component={Historia} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}



