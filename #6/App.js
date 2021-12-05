/*
  今回やること：Flex
**/

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.black} />
        <View style={styles.white} />
      </View>
      <View style={styles.view2} />
      <View style={styles.view3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view1: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  black: {
    width: 100,
    height: 100,
    backgroundColor: "#000"
  },
  white: {
    width: 100,
    height: 100,
    backgroundColor: "#fff"
  },
  view2: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  view3: {
    flex: 1,
    backgroundColor: 'red',
  },
});

