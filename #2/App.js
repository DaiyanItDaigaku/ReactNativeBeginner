import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square1}>
        <Text style={styles.text1}>Hello!</Text>
      </View>
      <View style={styles.square2}>
        <Text style={styles.text2}>Wo<Text style={styles.textR}>r</Text>ld!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square1: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  square2: {
    width: 200,
    height: 200,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  textR: {
    color: "red",
  },
});
