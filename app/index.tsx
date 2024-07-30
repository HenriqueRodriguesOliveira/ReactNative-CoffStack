import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "@/components/Button";

export default function Index() {
  console.log("rendered")

  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(true);


  function increment() {
    setCount(count + 1);
    console.log(count);
  }

  function decrement() {
    setCount(count - 1);
    console.log(count);
  }

  function toggleCount() {
    setShowCount(!showCount);
  }


  return (
    <View style={styles.container}>
      {showCount && <Text style={styles.text}>{count}</Text>}

      <Button onPress={increment} title={"+ 1"} style={{ marginTop: 10 }} />

      <Button onPress={decrement} title={"- 1"} style={{ marginTop: 10 }} />

      <Button variant="secondary" title="show" onPress={toggleCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 30
  }
});
