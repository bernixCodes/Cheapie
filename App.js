import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [text, setText] = useState("Guess what is happening today!!!!");
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <StatusBar style="auto" />
      <Button
        title="Click to see"
        onPress={() => {
          setText("Healing Streams with Pastor Chris! Glorrrryyyy");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
