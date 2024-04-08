
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './layout/Home';
import Bottom from './navigation/Bottom';
import Top from './top/Top';

export default function App() {
  return (
      // <Bottom/>
      <Top/>
  );
}

const styles = StyleSheet.create({
  container: {
    height:100,
    width:100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
