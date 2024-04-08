import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home1 from '../layout/Home1';
import Home3 from '../layout/Home3';
import { NavigationContainer } from '@react-navigation/native';
import Mh1 from './Mh1';
import Mh2 from './Mh2';


const Bottom = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="H1" component={Mh1} />
        <Tab.Screen name="H2" component={Mh2} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Bottom

const styles = StyleSheet.create({})