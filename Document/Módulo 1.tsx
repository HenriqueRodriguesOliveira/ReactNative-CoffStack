import { TextInput } from "@/components/TextInput";
import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
const [formValues, setFormValues] = useState({
firstName: "",
lastName: "",
email: "henrique@example.com",
address: {
city: "",
country: ""
}
});

function updateFirst(text: string) {
const updateValue = {
...formValues,
firstName: text
};
setFormValues(updateValue);
}

function updateLast(text: string) {
setFormValues({
...formValues,
lastName: text,
})
}

function updateCity(text: string) {
setFormValues({
...formValues,
address: {
...formValues.address,
country: text,
}
})
}

return (
<View style={styles.container}>
<TextInput value={formValues.firstName} onChangeText={updateFirst} />
<TextInput value={formValues.lastName} onChangeText={updateLast} />
<TextInput value={formValues.address.city} onChangeText={updateCity} />
<Text style={styles.text}>{`${formValues.firstName} ${formValues.lastName} :\n ${formValues.email} \n ${formValues.address.city} - ${formValues.address.country}`}</Text>
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
fontSize: 30,
textAlign: "center"
}
});
