import { Button } from "@/components/Button";
import { TextInput } from "@/components/TextInput";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  function changeName(text: string) {
    console.log(text)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native</Text>
      <TextInput placeholder='Enter your e-mail' style={{ marginTop: 10 }} />
      <TextInput placeholder='Enter your password' style={{ marginTop: 10 }} />

      <Button onPress={() => console.log("Clicou")} title={"Entrar"} style={{ marginTop: 10 }} />
      <Button onPress={() => console.log("Clicou 2")} title={"Criar conta"} style={{ marginTop: 10 }} variant="secondary" />

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
