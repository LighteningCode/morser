import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


const morseCode = {
  a: "._",
  b: "_...",
  c: "_._.",
  d: "_..",
  e: ".",
  f: ".._.",
  g: "__.",
  h: "....",
  i: "..",
  j: ".___",
  k: "_._",
  l: "._..",
  m: "__",
  n: "_.",
  o: "___",
  p: ".__.",
  q: "__._",
  r: "._.",
  s: "...",
  t: "_",
  u: ".._",
  v: "..._",
  w: ".__",
  x: "_.._",
  y: "_.__",
  z: "__..",
  "0": "_____",
  "1": ".____",
  "2": "..___",
  "3": "...__",
  "4": "...._",
  "5": ".....",
  "6": "_....",
  "7": "__...",
  "8": "___..",
  "9": "____.",

}


export default function App() {

  const [state, setState] = useState("")

  const onChange = (text) => {
    setState(text)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Welcome to Morser</Text>
      <Text>Enter your text here to convert to morse code</Text>


      <Text style={{ marginTop: 20 }}>Enter Morse Code here:</Text>
      <TextInput
        style={textBoxStyles.container}
        value={state}
        onChangeText={onChange}
      />


      <Text style={{ marginTop: 20 }}>Morse Equivalent:</Text>
      <Text>{(state === '') ? "No entry" : state}</Text>

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
});

const textBoxStyles = StyleSheet.create({
  container: {
    borderColor: "#000",
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    width: 250,
  }
})
