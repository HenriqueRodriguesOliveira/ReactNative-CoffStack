import React from "react";
import { TextInputProps, TextInput as RNTextInput, StyleSheet } from "react-native";

type Props = TextInputProps;

export function TextInput(props: Props) {
    return (
        <RNTextInput
            placeholderTextColor="#ddd"
            style={styles.textInput}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        width: 250,
        marginTop: 10,
        color: "#550ab1",
        padding: 10,
    },
})