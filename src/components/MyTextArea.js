import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const MyTextArea = (props) => {
  return (
    <TextInput
      multiline={true}
      numberOfLines={5}
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
      style={[styles.textInput, props.style]}
    />
  );
};

export default MyTextArea;

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
  },
});
