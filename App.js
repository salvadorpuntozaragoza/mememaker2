import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Cards from './Components/Cards';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style = {styles.container}>
      <Cards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      paddingTop: Constants.statusBarHeight,
  },
});

