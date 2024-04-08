import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home1 from './Home1';
import Home3 from './Home3';

const Home = () => {
    const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name='Mh1' component={Home1}/>
        <Stack.Screen name='Mh2' component={Home3}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Home

const styles = StyleSheet.create({})