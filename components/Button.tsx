import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet } from "react-native";

interface Props extends TouchableOpacityProps {
    title: string;
    variant?: "primary" | "secondary";
}

export function Button({ title, variant = "primary", style, ...rest }: Props) {

    const variantStyle = variant === "primary" ? styles.wrapperPrimary : styles.wrapperSecondary;
    const textColor = variant === "primary" ? "#FFF" : "#4a0f92";
    return (
        <TouchableOpacity style={[styles.wrapperCommon, variantStyle, style]} {...rest}>
            <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapperCommon: {
        height: 50,
        width: 200,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    wrapperPrimary: {
        backgroundColor: "#4a0f92",
    },
    wrapperSecondary: {
        borderColor: "#4a0f92",
        borderWidth: 2,
    },
    title: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20,
    }
})