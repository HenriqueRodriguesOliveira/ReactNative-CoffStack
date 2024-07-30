import React from 'react';
import { TextInputProps, TextInput as RNTextInput, StyleSheet } from 'react-native';

type Props = TextInputProps;

export function TextInput({ style, ...props }: Props) {
    return (
        <RNTextInput style={[styles.wrapper, style]} {...props} />
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: 250,
        padding: 5,
        borderWidth: 1,
        borderColor: "#000"
    }
})