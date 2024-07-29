import { Text, View, StyleSheet, TextInput, Button, TouchableHighlight, TouchableOpacity, Pressable } from "react-native";

export default function Index() {
  function changeName(text: string) {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native</Text>
      <TextInput
        autoCapitalize="words"
        style={{ borderWidth: 1, width: 250, marginTop: 10, color: "#550ab1", paddingHorizontal: 10 }}
        onChangeText={changeName}
        placeholder="Type your name"
        placeholderTextColor="#ddd"
      />

      <TouchableHighlight style={styles.btnLink} onPressIn={() => console.log("onPressIn")} onPress={() => { console.log("HighLight") }} underlayColor={"#6817ca"}>
        <Text style={styles.textBtn}>Highlight</Text>
      </TouchableHighlight>

      <TouchableOpacity style={styles.btnLink} activeOpacity={0.7}>
        <Text style={styles.textBtn}>Opacity</Text>
      </TouchableOpacity>

      <Pressable style={styles.btnLink} onLongPress={() => { console.log("onLongPress") }}>
        <Text style={styles.textBtn}>Pressable</Text>
      </Pressable>
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
  },
  btnLink: {
    height: 50,
    width: 200,
    backgroundColor: "#4a0f92",
    borderRadius: 12,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  textBtn: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  }
});