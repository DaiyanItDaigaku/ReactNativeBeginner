/*
  今回やること：配列を表示する
  新規で使うコンポーネント：ScrollView, FlatList, TouchableOpacity, Alert
  ScrollView・・・スクロールできるView
  FlatList・・・配列をまとめて表示できる
  TouchableOpacity・・・押した時のアクションを設定できる
  Alert・・・アラートを出す
**/

import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const names = [
  {name: "松原", key: 1},
  {name: "坂本", key: 2},
  {name: "丸", key: 3},
  {name: "岡本", key: 4},
  {name: "中島", key: 5},
  {name: "亀井", key: 6},
  {name: "吉川", key: 7},
  {name: "大城", key: 8},
  {name: "菅野", key: 9},
  {name: "松原", key: 11},
  {name: "坂本", key: 12},
  {name: "丸", key: 13},
  {name: "岡本", key: 14},
  {name: "中島", key: 15},
  {name: "亀井", key: 16},
  {name: "吉川", key: 17},
  {name: "大城", key: 18},
  {name: "菅野", key: 19},
]

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {names.map((item) => (
          <View key={item.key} style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
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
  item: {
    width: 300,
    marginBottom: 30,
    backgroundColor: "yellow"
  },
  name: {
    fontSize: 30,
    textAlign: "center"
  }
});
