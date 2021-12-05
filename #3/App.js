import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState("ダイヤン")
  const [age, setAge] = useState(20)
  const [hobby, setHobby] = useState("")

  const onPressButton = () => {
    setName("田中")
    setAge(30)
  }

  const onChangeText = (value) => {
    setHobby(value)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={hobby}
      />

      <Text>私の名前は{name}です</Text>
      <Text>私の年齢は{age}です</Text>
      <Text>趣味は{hobby}です</Text>


      <Button title="名前を変える"　onPress={onPressButton} />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
