import { useState, useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { TextInput } from "@/components/TextInput";
import { Button } from "@/components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

async function getListFromApi(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["item 1", "item 2", "item 3"]);
    }, 2000);
  })
}

export default function Index() {
  const [text, setText] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  async function getList() {
    try {
      const values = await getListFromApi();
      setList(values);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getList();
  }, []);

  function addItem() {
    setList((prev) => [...prev, text]);
  }

  function removeItem(text: string) {
    setList((prev) => prev.filter((item) => item !== text));
  }


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput placeholder="add item" onChangeText={setText} />
          <Button
            title="+"
            style={{ width: 50, marginLeft: 10 }}
            onPress={addItem}
          />
        </View>
        {loading ? (
          <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#550ab1" />
        ) : (
          list.map((item) => (
            <View key={item} style={styles.item}>
              <Text style={styles.text}>{item}</Text>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item)}>
                <Text style={styles.textRemove}>x</Text>
              </TouchableOpacity>
            </View>
          )))}

      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  removeButton: {
    backgroundColor: "#fff",
    padding: 3,
    borderRadius: 8,

    alignItems: "center"
  },
  item: {
    padding: 10,
    marginTop: 10,
    width: 350,
    backgroundColor: "#550ab1",
    borderRadius: 8,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  textRemove: {
    padding: 10,
    backgroundColor: "#FFF"
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  }
});
