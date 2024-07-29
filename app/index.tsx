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
      <TextInput
        onChangeText={changeName}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#ddd"
      />

      <TextInput
        secureTextEntry
        onChangeText={changeName}
        placeholder="Digite a sua senha"
        placeholderTextColor="#ddd"
      />

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
