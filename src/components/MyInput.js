import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function (props) {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
      style={[styles.textInput, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
  },
});
